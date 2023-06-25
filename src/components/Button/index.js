import React from "react";
import * as C from "./styles.js"

export default function Button({Text, onClick, type= "button"}) {
    return(
        <C.botao
        type={type} 
        onClick={onClick}>
            {Text}
        </C.botao>
    )
}