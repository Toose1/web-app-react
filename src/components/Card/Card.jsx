import React, { useState } from 'react'
import Button from '../Button/Button'
import "./Card.css"
import ButtonRef from "../ButtonRef/ButtonRef"

function Card({item, onAdd, onRemove}) {
    const [count, setCount] = useState(0)
    const [moreInfo, setMoreInfo] = useState(false)

    const addItem = () => {
        setCount(count+1)
        onAdd(item)
    }

    const removeItem = () => {

        setCount(count-1)
        onRemove(item)
        
    }

    const onActive = () => {
        setMoreInfo(true)
        console.log(`${item.title}`)
    }

    const onDisactive = () => {
        setMoreInfo(false)
    }

    return (
        <div className='card'>
            <div className="card_top">
                <span className={`${count !== 0 ? "card_badge" : "card_badge--hidden"}`}>{count}</span>
                <div className="image__container">
                    {
                        moreInfo === false ? <ButtonRef item={item} onClick={onActive}/> :
                        <Button title={"БЕЕБЕББ"} type={"increase"} disable={false} onClick={onDisactive}/>
                    }
                </div>
            </div>

    
            <div className={"card__title"}>
                {item.title} • ₽<span><b>{item.price}</b></span>
            </div>
            <div className="btn-container">
                {
                count === 0 ? 
                <Button title={"Добавить"} type={"add"} disable={false} onClick={addItem}/> :
                <div className='container'>
                    <Button title={"-"} type={"decrease"} disable={false} onClick={removeItem}/>
                    <Button title={"+"} type={"increase"} disable={false} onClick={addItem}/>
                </div>
                }
            </div>
            

        </div>
    )
}

export default Card