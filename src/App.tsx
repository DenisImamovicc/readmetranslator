import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Prewiev from './components/Prewiev';

const App:React.FC = () => {
  const [input, setinput] = useState<string>("Hello") 
  const [output, setoutput] = useState<string>("")

  return (
    <div className="App">
      <h1 id='Title' className='text-center'>Markdown Prewiever</h1>
      <Editor input={input} setoutput={setoutput}/>
      <Prewiev output={output}/>
    </div>
  );
}

export default App;
