import React from "react";
import * as C from "./styles";

export default function UserImage(image) {

    if(typeof image.src != "undefined") {
        return(
            <C.UserImage src={image.src}></C.UserImage>
            )
    }else{
        return(
            <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        )
    }
}

export function UserChat({image}) {
   
    if(typeof image != "undefined") {
        return(
            <C.UserImage src={image}></C.UserImage>
            )
    }else{
        return(
            <svg stroke="black" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        )
    }
}