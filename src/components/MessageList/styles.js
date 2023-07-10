import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    height: 85%;
 
    flex-direction: column;
    border-radius: 5px;
    padding: 0;
`

export const Box = styled.ul`
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;  
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0;
    margin-bottom: 16px;
    height: 100px;
`
export const Message = styled.li`
    display: flex;
    text-align: left;
    list-style-type: none;
    color: black;   
    background-color: white;
    padding: 20px;
    margin-bottom: 12px;
` 
export const MessageAnswer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: start;
    list-style-type: none;
    color: black;   
    background-color:  rgb(247,247,248);
    padding: 20px;
    border-top: 1px solid rgba(0,0,0,.1);
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 12px;
`

export const Text = styled.p`
    padding-left: 40px;
`

export const DogIcon = styled.img`
    width: 50px;
    height: 50px;
`