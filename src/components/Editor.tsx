import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props {
  input: string;
  setinput: React.Dispatch<React.SetStateAction<string>>
}

const Editor: React.FC<Props> = ({ input, setinput }) => {

  const parseInput = (input: string) => {
    console.log(input);
  }
  return (
    <div id='editor-textarea'>
      <FloatingLabel
        controlId="floatingTextarea"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea"
          placeholder="Leave a comment here"
          name="editor-textarea"
          id="editor"
          value={input}
          onChange={(e) => setinput(e.target.value)} />
      </FloatingLabel>
    </div>
  )
}
export default Editor;
