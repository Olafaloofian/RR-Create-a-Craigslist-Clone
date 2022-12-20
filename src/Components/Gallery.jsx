import React from 'react'
import Item from './Item'
import { postings } from '../postings'

function Gallery() {
    console.log(postings)
    return (
        <div style={{padding: '50px'}}>
            <div>
                <select>
                    <option value="gallery">gallery</option>
                </select>
                <div style={{width: "200px", border: "1px solid grey", height: "30px", borderRadius: "4px"}}></div>
            </div>
            <div style={{display: 'flex', flexWrap: "wrap"}}>
                {postings.map((data, i) => <Item data={data} key={i}/>)}
            </div>
        </div>
    )
}

export default Gallery