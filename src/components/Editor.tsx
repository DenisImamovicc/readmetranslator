import React, { useEffect} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { marked } from 'marked';

interface Props {
  output: string;
  setoutput: React.Dispatch<React.SetStateAction<string>>

}
//Enables <br> on marked library on enter keyinput.
marked.setOptions({ breaks: true, });

const Editor: React.FC<Props> = ({setoutput,output }) => {
  useEffect(() => {
    parseInput(output)
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
        <h2 className='sub-title'>Put markdown text here:</h2>
        <Form.Control as="textarea"
          placeholder=""
          name="editor-textarea"
          onChange={(e) => parseInput(e.target.value)}
          defaultValue={output}>
        </Form.Control>
      </FloatingLabel>
    </>
  )
}
export default Editor;
