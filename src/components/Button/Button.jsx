import React from "react"
import "./Button.css"

export default function Button({type, disable, title, onClick}) {
    return (
        <div>
            <button
                className={`btn ${
                    (type === "add" && "add") ||
                    (type === "increase" && "increase") ||
                    (type === "remove" && "remove") ||
                    (type === "decrease" && "decrease") ||
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