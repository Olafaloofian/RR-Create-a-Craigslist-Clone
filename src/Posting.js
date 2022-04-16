import React from "react"

function Posting(props) {
    console.log(props)
    return (
        <div className="posting">
            <div className="price">{props.data.price}</div>
            <img src={props.data.imageURL} alt={props.data.title} />
            <div>
                <span>{props.data.title} </span>
                <span>{props.data.price}</span>
            </div>
        </div>
    )
}

export default Posting