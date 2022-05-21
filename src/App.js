import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import {marked} from "marked";

function App() {

  const [text, setText] = useState("")
  const markdown = marked(text)
  
  return (
    <div className='container py-5'>
        <div className="input">
            <textarea className='form-control' id="editor" cols="30" rows="10" onChange={e=>setText(e.target.value)}></textarea>
        </div>
        <div className="output">
            <div className="p-5">
            <article dangerouslySetInnerHTML={{__html: markdown}}></article>
            </div>
        </div>
    </div>
  );
}

export default App;
