import React from "react"
import "./card.css"


function Card({name, fullname,forks,open,stars,contributors,image}) {
    
    return (
        <div className="card1">
            <img src={image} alt="" width="100px" height="100px" />
            <h1>Username: {name}</h1>
            <h1>Fullname: {fullname}</h1>
            <h1>Open Issues: {open}</h1>
            <h1>Forks: {forks}</h1>
            <h1>Stars: {stars}</h1>

      
        </div>
    )
}

export default Card
