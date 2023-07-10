import React from "react";
import "./styles.css"

export default function Examples({fun}) {

    return(
        <div className="main-examples">
        <h1 className="main-title">DogGPT</h1>
        <div className="examples-container">
          <div className="examples-content">
            <svg className="svg-ex" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <h1>Examples</h1>
            <button onClick={()=> {fun("Como fazer uma paródia do ChatGPT?")}} 
              className="example-button">"Como fazer uma paródia do ChatGPT?"{" ->"}</button>
            <button onClick={()=> {fun("Como centralizar uma Div?")}} 
              className="example-button">"Como centralizar uma Div?" {"->"}</button>
            <button onClick={()=> {fun("Como fazer uma conexão com o banco de dados?")}} 
              className="example-button">"Como fazer uma conexão com o banco de dados?" {"->"}</button> 
          </div>
          <div className="examples-content">
            <svg className="svg-ex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
            <h1>Capabilities</h1>
            <ul className="no-style-list">
              <li className="example-li">Respostas de cachorros muito inteligentes</li>
              <li className="example-li">Consegue ouvir quando você abre um pacote de biscoito</li>
              <li className="example-li">Treinado para sentar e rolar</li>
            </ul>
          </div>
          <div className="examples-content">
            <svg className="svg-ex" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <h1>Limitation</h1>
            <ul className="no-style-list">  
              <li className="example-li">Só responde latindo</li>
              <li className="example-li">Pode ocasionalmente ficar bravo</li>
              <li className="example-li">Conhecimento limitado para um cérebro de cachorro</li>
            </ul>
          </div> 
        </div> 
      </div>
    
    );
}