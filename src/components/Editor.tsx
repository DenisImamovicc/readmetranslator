import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Editor() {
  return (
    <div id='editor-textarea'>
      <FloatingLabel
        controlId="floatingTextarea"
        label=""
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" name="editor-textarea" id="editor" />
      </FloatingLabel>
    </div>
  )
}
