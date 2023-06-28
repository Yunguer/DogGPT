import React from "react";
import * as C from "./styles.js"


export default function HistoricList({historico, fun}) {
    console.log("fun",typeof fun)
    return (
        <C.Content>
            <C.Box>
                {  historico.map((hist, index) => {
                    return(
                        <C.Hist key={index} onClick={()=>{fun(index)}}>
                            <svg color="white"stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            {hist.pergunta}
                        </C.Hist>
                    )
                })

                }
            </C.Box>
        </C.Content>
    )
}