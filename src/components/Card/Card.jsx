import React, { useState } from 'react'
import Button from '../Button/Button'
import "./Card.css"

function Card({item, onAdd, onRemove}) {
    const [count, setCount] = useState(0)

    const addItem = () => {
        setCount(count+1)
        onAdd(item)
    }

    const removeItem = () => {

        setCount(count-1)
        onRemove(item)
        
    }

    return (
        <div className='card'>
            <span className={`${count !== 0 ? "card_badge" : "card_badge--hidden"}`}>{count}</span>

            <div className={"card__title"}>{item.title}</div>
            <div className={"card__description"}>{item.description}</div>
            <div className={"card__price"}>
                <span>Стоимость: <b>{item.price}</b></span>
            </div>
             
            <div className="btn-container">
                {
                    count === 0 ? 
                    <Button title={"Добавить"} type={"add"} disable={false} onClick={addItem}/> :
                    <div className='container'>
                        <Button title={"+"} type={"add"} disable={false} onClick={addItem}/>
                        <Button title={"-"} type={"incr"} disable={false} onClick={removeItem}/>
                    </div>
                }
            </div>



        </div>
    )
}

export default Card