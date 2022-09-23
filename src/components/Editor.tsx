import React, { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { marked } from 'marked';

interface Props {
  input: string;
  setoutput: React.Dispatch<React.SetStateAction<string>>
}
//Enables <br> on marked library on enter keyinput.
marked.setOptions({ breaks: true, });

const Editor: React.FC<Props> = ({ input, setoutput }) => {
  useEffect(() => {
    parseInput(input)
  }, [])

  const parseInput = (inputs: string) => {
    const markedInput = marked.parse(inputs)
    setoutput(markedInput)
    // console.log(markedInput);
  }
  return (
    <>
      <FloatingLabel
        controlId="editor"
        label=""
        className="mainBox"
      >
        <Form.Control as="textarea"
          placeholder=""
          name="editor-textarea"
          onChange={(e) => parseInput(e.target.value)}
          defaultValue={input}>
        </Form.Control>
      </FloatingLabel>
    </>
  )
}
export default Editor;
