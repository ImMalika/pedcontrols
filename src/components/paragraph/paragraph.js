import React from 'react'
import  "./paragraph.scss"

const Paragraph = ({text}) => {
    return (
        <div>
            <p className="mytext">{text}</p>
        </div>
    )
}

export default Paragraph