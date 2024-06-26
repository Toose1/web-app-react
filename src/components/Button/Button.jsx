import "./Button.css"

export default function Button({title, onClickEvent}) {
    return (
        <div>
            <button onClick={onClickEvent}>{title}</button>
        </div>
    )
}