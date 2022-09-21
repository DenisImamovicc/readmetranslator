import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props {
  output: string;
}

const Prewiev:React.FC<Props> = ({output}) => {
  return (
    <div>
        <FloatingLabel
        controlId="preview"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea" 
        placeholder="Leave a comment here" 
        name="preview-textarea" 
        value={output}
        // onChange={()=>output}
        readOnly
        />
      </FloatingLabel>
    </div>
  )
}
export default Prewiev;