import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Prewiev from './components/Prewiev';
import { text } from './defaulttextVar';

const App: React.FC = () => {
  const [input, setinput] = useState<string>(text)
  const [output, setoutput] = useState<string>(text)

  return (
    <div className="App">
      <h1 id='Title' className='text-center'>Markdown Prewiever</h1>
      <main id='main'>
        <Editor setoutput={setoutput} output={output} setinput={setinput} input={input}/>
        <Prewiev output={output} />
      </main>
    </div>
  );
}

export default App;
