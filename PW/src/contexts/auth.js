import { createContext, useEffect, useState } from "react";
import localStorage from "local-storage";
import { createClient } from "@supabase/supabase-js";


const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4YWpvenZmYXJxcGVrbnhwcW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NDAxNjksImV4cCI6MjAwMDQxNjE2OX0.1S4_cSS2chgNR7MtTPNhAR5NEgsDS_-Z3Ht86brKJQo';
const SUPABASE_URL = 'https://pxajozvfarqpeknxpqmt.supabase.co';
const supabaseClient = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    
    useEffect(() => {
        const userToken = JSON.parse(localStorage.get("user_token"));
        console.log("useEffect " + user);
        if(userToken) {
            acessarBanco().then((usuarios) => {
                const hasUser = usuarios?.filter((user) => user.email === userToken.email); 
                if(hasUser) setUser(hasUser[0]);
            })
        }
    }, []);

    // Verificando e setando usuário
    async function acessarBanco() {
        let {data: usuarios, error} = await supabaseClient
        .from('usuarios')
        .select("*")

        return usuarios;
    }

    async function gravarBanco(usuario) {
        const { error_ } = await supabaseClient
            .from('usuarios')
            .insert(usuario)
            console.log("erro = " + error_)
    }

    // Verificando email e senha
    const signin = (email, password) =>{ 

        console.log("Entrando na funcao signin");
        acessarBanco().then((usuarios) => {
            
            console.log(usuarios);
            const hasUser = usuarios?.filter((user) => user.email === email);
            
            if(hasUser?.length) {
                if(hasUser[0].email === email && hasUser[0].senha === password) {
                    const token = Math.random().toString(36).substring(2);
                    const nome = hasUser[0].nome;
                    const id = hasUser[0].id;
                    setUser({email, password, nome, id});
                    
                    localStorage.set("user_token", JSON.stringify({email, token}))
                } else {
                    return "Email ou senha incorretos.";
                }
            }else {
                return "Usuário não cadastrado."
            }
        
        }
        );
        
    }

    const signup = (email, password, nome) =>{
        acessarBanco().then( (usuarios) => {
            console.log("entrou no signup")
            const hasUser = usuarios?.filter((user) => user.email === email);

            if(hasUser?.length) {
                return "Email já cadastrado."
            }

            const usuario= {
                email: email,
                senha: password,
                nome: nome
            }

            gravarBanco(usuario);

            return;

        }
        )
        
    }

    const signout = () => {
        console.log("Entrou no signout");
        setUser(null);
        localStorage.remove("user_token");
    }

    return <AuthContext.Provider
        value={{user, signed: !!user, signin, signup, signout}}
    >
        {children}
    </AuthContext.Provider>
}