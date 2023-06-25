import * as C from "./style.js"

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';



export default function Singin() {
    
    const { signin } = useAuth();
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) { 
            setError("Preencha todos os campos");
            return;
        }

        signin(email, senha).then((res) => {
            if (res) {
                setError(res);
                return;
            }
    
            navigate("/home");
        });

    }

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
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    type="senha"
                    placeholder="Digite a sua Senha"
                    value={senha}
                />  
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <C.Label>
                    Não tem conta?
                    <C.Strong>
                        <Link to="/singup">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.Label>
            </C.Content>
        </C.Container>    
    )
}