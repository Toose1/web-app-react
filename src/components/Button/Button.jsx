
export default function Button({props}) {
    return (
        <div>
            <button {...props} className={"button " + props.className}/>
        </div>
    )
}