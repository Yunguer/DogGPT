import React from "react";
import * as C from "./styles.js"

export default function ButtonLoggout({Text, onClick, type= "button"}) {
    return(
        <C.botao
        type={type} 
        onClick={onClick}>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            {Text}
        </C.botao>
    )
}