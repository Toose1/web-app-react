import "./Button.css"

export default function Button({type, disable, title, onClick}) {
    return (
        <div>
            <button
                className={`btn ${
                    (type === "add" && "add") ||
                    (type === "remove" && "remove") ||
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