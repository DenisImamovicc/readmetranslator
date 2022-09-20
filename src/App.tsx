import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Prewiev from './components/Prewiev';

const App:React.FC = () => {
  const [input, setinput] = useState<string>("") 
  const [output, setoutput] = useState<string>("")

  return (
    <div className="App">
      <h1 id='Title' className='text-center'>Markdown Prewiever</h1>
      <Editor input={input} setinput={setinput}/>
      <Prewiev output={output} setoutput={setoutput}/>
    </div>
  );
}

export default App;
