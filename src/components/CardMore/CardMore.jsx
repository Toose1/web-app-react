import React from "react"
import "./CardMore.css"

export default function CardMore({item, onClick}) {
    return (
        <>
            <div className="card__info">
                {item.title}
                {item.description}
                {item.price}
            </div>
        </>
    )
}