import React from 'react'
import "./myimg.scss"

const Myimg = ({img}) => {
  return (
    <div className='myimg'><img src={img} alt="image" /></div>
  )
}

export default Myimg