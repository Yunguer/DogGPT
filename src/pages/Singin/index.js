import * as C from "./style.js"

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const clientId = "820964649937-8fjv5regbo6nvanc2hnd564t1vlubjf0.apps.googleusercontent.com"
export default function Singin() {
    
    const { signin, signGoogle } = useAuth();
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
        var decoded = jwt_decode(response.credential);
        const email = decoded.email;
        const senha = decoded.nbf.toString();
        const nome = decoded.given_name;
        const foto_url = decoded.picture;
        signGoogle(email, senha, nome, foto_url);

        navigate("/home");
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
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin 
                        onSuccess={onSuccessGoogle}
                        onError={onFailureGoogle}
                    />
                </GoogleOAuthProvider>
            </C.Content>
        </C.Container>    
    )
}