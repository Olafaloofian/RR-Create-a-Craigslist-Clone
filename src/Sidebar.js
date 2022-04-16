import React from "react"
import Help from "./Help"

function Sidebar() {
    return (
        <div className="sideBar">
            <h3>furniture</h3>
            <div>
                <button>All</button>
                <button>Owner</button>
                <button>Dealer</button>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    <input type="checkbox" onChange={() => {console.log("CHECKBOX")}}/>
                    <span>Search titles only</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Has Image</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Posted Today</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Bundle Duplicates</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>INclude Nearby Areas</span>
                </div>
            </div>
            <Help />
        </div>
    )
}

export default Sidebar