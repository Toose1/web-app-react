import React from "react"
import "./CardMore.css"

export default function CardMore({item, onClick}) {
    return (
        <>
            <div className="card__info">
                <div>
                    {item.title}
                </div>
                <div>
                    {item.description}
                </div>
                <div>
                    {item.price}
                </div>
                <button onClick={onClick}></button>
            </div>
        </>
    )
}