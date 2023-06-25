import React, {useState} from 'react';
import * as C from "./style.js"

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function Singup() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if(!email | !nome | !senha) {
            setError("Preencha todos os campos");
            return;
        } 

        signup(email, senha, nome).then((res) =>{
            if(res) {
                setError(res);
                return;
            }
    
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        });

        
    };

    return(
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    type="email"
                    placeholder="Digite o seu E-mail"
                    value={email}
                />
                <Input
                    onChange={(e) => [setNome(e.target.value), setError("")]}
                    type="nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                /> 
                <Input
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    type="senha"
                    placeholder="Digite a sua Senha"
                    value={senha}
                /> 
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Inscreva-se" onClick={handleSignup}/>
                <C.LabelSignin> 
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    )
}