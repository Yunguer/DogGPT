import React from "react";

import * as C from "./styles.js";
import dogImage from "./dog-icon.png"
import { UserChat } from "../UserImage/index.js";

export default function MessageList({lista, image}) {
    console.log("image user ",image)
    return(
        <C.Content>
            <C.Box>
                { lista.map((per) => {
                    return(
                    <div>  
                        <C.Message>
                            {UserChat({image})}
                            <C.Text> {per.pergunta} </C.Text>
                        </C.Message>
                        <C.MessageAnswer>
                            <C.DogIcon src={dogImage}/>
                            <C.Text> {per.resposta}</C.Text>
                        </C.MessageAnswer>
                    </div>
                    )}
                    )
                }
            </C.Box>
        </C.Content>
        );
    
}



