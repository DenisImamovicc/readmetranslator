import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props {
  output: string;
  setoutput: React.Dispatch<React.SetStateAction<string>>
}

const Prewiev:React.FC<Props> = ({output,setoutput}) => {
  return (
    <div id='prewiev-textarea'>
        <FloatingLabel
        controlId="floatingTextarea"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea" 
        placeholder="Leave a comment here" 
        name="prewiev-textarea" 
        id="prewiev"
        value={output}
        onChange={()=>output}
        readOnly
        />
      </FloatingLabel>
    </div>
  )
}
export default Prewiev;