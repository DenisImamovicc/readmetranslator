import React from 'react'
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