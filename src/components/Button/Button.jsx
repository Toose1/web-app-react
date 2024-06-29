import React from "react"
import "./Button.css"

export default function Button({type, disable, title, onClick}) {
    return (
        <div className="quantity-buttons">
            <button
                className={`btn ${
                    (type === "add" && "add") ||
                    (type === "incr" && "incr") ||
                    (type === "remove" && "remove") ||
                    (type === "dicr" && "dicr") ||
                    (type === "checkout" && "checkout") 
                }`}
                disabled={disable}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
}