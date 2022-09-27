import React, { useEffect, useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { marked } from 'marked';
import { FaTrashAlt } from 'react-icons/fa';

interface Props {
  setoutput: React.Dispatch<React.SetStateAction<string>>
  setinput: React.Dispatch<React.SetStateAction<string>>
  output: string;
  input: string;
}
//Enables <br> on marked library on enter keyinput.
marked.setOptions({ breaks: true, });

const Editor: React.FC<Props> = ({ setoutput, setinput, output, input }) => {

  useEffect(() => {
    handleInputAndOutput(output)
  }, [])

  const handleInputAndOutput = (inputs: string) => {
    setinput(inputs)
    displayOutput(inputs)
  }

  const displayOutput = (inputs: string) => setoutput(marked.parse(inputs))

  const handleDeleteAllText = () => {
    setoutput("")
    setinput("")
    console.log("text delete");
  }

  return (
    <>
      <FloatingLabel
        controlId="editor"
        label=""
        className="mainBox"
      >
        <div>
          <h2 className='sub-title'>Put markdown text here:</h2>
          <Button onClick={handleDeleteAllText} variant="outline-light" size="sm" className='mb-1' title="Delete all text"><FaTrashAlt /></Button>
        </div>
        <Form.Control as="textarea"
          name="editor-textarea"
          onChange={(e) => handleInputAndOutput(e.target.value)}
          value={input}>
        </Form.Control>
      </FloatingLabel>
    </>
  )
}
export default Editor;
