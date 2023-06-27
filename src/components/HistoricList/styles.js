import { styled } from "styled-components";


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    height: 100%;   
`

export const Hist = styled.button`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    height: 45px;
    color: white;
    background-color: #202123;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    &: hover{
        background-color: #353740;
    }
`

export const Box = styled.ul`
    overflow-y: scroll;
    overflow-x: hidden; 
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2px;
    padding-right:12px;
    padding-left:10px;
    margin-bottom: 16px;
    height: 100%;
`