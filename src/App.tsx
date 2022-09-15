import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Prewiev from './components/Prewiev';

function App() {
  return (
    <div className="App">
      <h1 id='Title' className='text-center'>Markdown Prewiever</h1>
      <Editor />
      <Prewiev />
    </div>
  );
}

export default App;
