import React from "react";
import "./styles.css"

export default function Examples() {

    return(
        <div className="main-examples">
        <h1 className="main-title">ChatGPT</h1>
        <div className="examples-container">
          <div className="examples-content">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <h1>Examples</h1>
            <button className="example-button">"Explain quantum computing in simple terms"{" ->"}</button>
            <button className="example-button">"Got any creative ideas for a 10 year old’s birthday?" {"->"}</button>
            <button className="example-button">"How do I make an HTTP request in Javascript?" {"->"}</button> 
          </div>
          <div className="examples-content">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
            <h1>Capabilities</h1>
            <ul className="no-style-list">
              <li className="example-li">Remembers what user said earlier in the conversation</li>
              <li className="example-li">Allows user to provide follow-up corrections</li>
              <li className="example-li">Trained to decline inappropriate requests</li>
            </ul>
          </div>
          <div className="examples-content">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <h1>Limitation</h1>
            <ul className="no-style-list">  
              <li className="example-li">May occasionally generate incorrect information</li>
              <li className="example-li">May occasionally produce harmful instructions or biased content</li>
              <li className="example-li">Limited knowledge of world and events after 2021</li>
            </ul>
          </div> 
        </div> 
      </div>
    
    );
}