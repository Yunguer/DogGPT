import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function(){
    const context = useContext(AuthContext);

    return context;
}