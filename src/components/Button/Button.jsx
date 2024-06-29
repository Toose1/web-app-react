import React from "react"
import "./Button.css"

export default function Button({type, disable, title, onClick}) {
    return (
        <div>
            <button
                className={`btn ${
                    (type === "add" && "add") ||
                    (type === "add-incr" && "add-incr") ||
                    (type === "remove" && "remove") ||
                    (type === "remove-dicr" && "remove-dicr") ||
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