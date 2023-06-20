import React from "react";
import * as C from './styles.js';

export default function Input({type, placeholder, value, onChange}) {
    return(
        <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        ></C.Input>    
    )
}