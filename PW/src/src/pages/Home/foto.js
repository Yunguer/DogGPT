import React from "react";
import  './Style.css';


export default function foto({props}) {
    console.log(props)
    if(props === undefined) {
        console.log("entrou no undefine")
        return (<svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>)
    }else{
        return (<img className="account-image" src={props} />
        )
    }
}

