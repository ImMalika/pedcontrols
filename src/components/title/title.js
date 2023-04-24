import React from 'react'
import "./title.scss";

const Title = ({titleName}) => {
    return (
        <div>
            <h1 className="title">{titleName}</h1>
        </div>
    )
}

export default Title