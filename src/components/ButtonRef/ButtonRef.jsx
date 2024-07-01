import React from "react"
import "./ButtonRef.css"

export default function Button({item, disable}) {
    return (
        <>
            <button className='more__button' disabled={disable}>
                <img src={item.image}/>
            </button>
        </>
    )
}