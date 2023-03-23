import React from "react"

export default function Card(props) {
    console.log(props.coverImg);
    return (
        <div className="card">
            <div className="card--image" ><img className="image" src={props.coverImg} /></div>
            <div className="card--stats">
                <img className="card--star" />
                <span></span>
                <span className="gray">{props.stats.rating}(6) • </span>
                <span className="gray"></span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>  person</p>
        </div>
    )
}