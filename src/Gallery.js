import React from "react"
import Posting from "./Posting"
const craigPost = require('./postings')

function Gallery() {
    console.log('DATA ----', craigPost.postings[0])
    return (
        <div className="gallery">
            {
                craigPost.postings.map((dataObj, i) => {
                    return <Posting data={dataObj} key={i}/>
                })
            }
        </div>
    )
}

export default Gallery