import React from "react";
import Examples from "../../components/Examples";


export default function Content({props}) {

    if(props === -1) {
        return (<Examples></Examples>)
    }else{
        return (<h1>Chat {props}</h1>)
    }
}