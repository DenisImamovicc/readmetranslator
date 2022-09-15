import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Prewiev() {
  return (
    <div id='prewiev-textarea'>
        <FloatingLabel
        controlId="floatingTextarea"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" name="prewiev-textarea" id="prewiev"/>
      </FloatingLabel>
    </div>
    
  )
}
