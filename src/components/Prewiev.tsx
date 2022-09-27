import React from 'react'
import parse from 'html-react-parser';

interface Props {
  output: any;
}

const Prewiev: React.FC<Props> = ({ output }) => {
  return (
    <div className='previev-box'>
      <h2 className='sub-title'>Markdown text result:</h2>
      <div id='preview'>
        {parse(output)}
      </div>
    </div>
  )
}
export default Prewiev;