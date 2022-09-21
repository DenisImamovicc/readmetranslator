import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import parse from 'html-react-parser';

interface Props {
  output: any;
}


const Prewiev:React.FC<Props> = ({output}) => {
  
  return (
    <div id='preview'>
      {parse(output)}
    </div>
  )
}
export default Prewiev;