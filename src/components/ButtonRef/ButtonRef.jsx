import React from "react"
import "./ButtonRef.css"

export default function Button({item, onClick}) {
    return (
        <>
            <button className='more__button' onClick={onClick}>
                <img src={item.image}/>
            </button>
        </>
    )
}