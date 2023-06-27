import React from "react";
import * as C from "./styles.js";



export default function MessageList({lista}) {
    console.log("lista ", lista)
    return(
        <C.Content>
            <C.Box>
                { lista.map((per) => {
                    console.log("per ",per)
                    return(
                    <div>  
                        <C.Message>
                            <p> Você: {per.pergunta} </p>
                        </C.Message>
                        <C.MessageAnswer>
                            <p> Resposta: {per.resposta}</p>
                        </C.MessageAnswer>
                    </div>
                    )}
                    )
                }
            </C.Box>
        </C.Content>
        );
    
}
