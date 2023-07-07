import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    height: 85%;
 
    flex-direction: column;
    border-radius: 5px;
    padding: 12px;
`

export const Box = styled.ul`
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;  
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right:12px;
    padding-left:10px;
    margin-bottom: 16px;
    height: 100px;
`
export const Message = styled.li`
    display: flex;
    text-align: left;
    list-style-type: none;
    color: black;   
    background-color: white;
    border-radius: 5px;
    padding: 6px;
    margin-bottom: 12px;
` 
export const MessageAnswer = styled.li`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    color: black;   
    background-color:  rgb(247,247,248);
    border-radius: 5px;
    padding: 6px;
    padding-rigth:6px;
    margin-bottom: 12px;
` 
