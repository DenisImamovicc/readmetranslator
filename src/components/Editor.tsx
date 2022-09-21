import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { marked } from 'marked';

interface Props {
  input: string;
  setoutput: React.Dispatch<React.SetStateAction<string>>
}

const Editor: React.FC<Props> = ({ input,setoutput}) => {

  const parseInput = (input: string) => {
    const markedInput=marked.parse(input)
    setoutput(markedInput)
    console.log(markedInput);
  }

  return (
    <div>
      <FloatingLabel
        controlId="editor"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea"
          placeholder="Leave a comment here"
          name="editor-textarea"
          
          onChange={(e) => parseInput(e.target.value)} />
      </FloatingLabel>
    </div>
  )
}
export default Editor;
