import React from 'react'

function Searchbar() {
    const inputStyle = {
        width: '90%', 
        height: '50px', 
        borderRadius: '8px', 
        border: "1px solid grey"
    }

    return (
        <>
            <input style={inputStyle} type="text" placeholder="Search furniture" />
        </>
    )
}

export default Searchbar