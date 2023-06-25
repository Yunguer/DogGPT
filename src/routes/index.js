import { Fragment } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Singup from "../pages/Singup";
import Singin from "../pages/Singin";
import useAuth from "../hooks/useAuth";

const Private = ({Item }) => {
    const {user, signed} = useAuth();
    return signed > 0 ? <Item user={user}/> : <Singin />
}

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>} />
                    <Route path="/" element={<Singin />} />
                    <Route exact path="/singup" element={<Singup />} />
                    <Route path="*" element={<Singin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>  
    );
}