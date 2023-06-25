import * as C from "./style.js"

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import GoogleLogin from "react-google-login";

const clientId = "820964649937-8fjv5regbo6nvanc2hnd564t1vlubjf0.apps.googleusercontent.com"
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

    const onSuccessGoogle = (response) => {
        console.log(response.profileObj);
    }

    const onFailureGoogle = (response) => {
        console.log("LOGIN FAILED! res:"+ response);
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
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Continuar com o Google"
                    onSuccess={onSuccessGoogle}
                    onFailure={onFailureGoogle}
                /> 
            </C.Content>
        </C.Container>    
    )
}