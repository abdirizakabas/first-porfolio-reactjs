

import React from 'react'
import './Pageheader.scss'

 const Pageheader = (props) => {
    const {textHeader,Icon}=props;
      console.log(textHeader,Icon)
  return (
        <div className='wrapper'>
            <h2>{textHeader}</h2>
            <span>{Icon}</span>
        </div>
  )
}
export default Pageheader;
