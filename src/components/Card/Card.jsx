import React, { useState } from 'react'
import Button from '../Button/Button'
import "./Card.css"
import ButtonRef from "../ButtonRef/ButtonRef"
import CardMore from '../CardMore/CardMore'
import UniButton from '../UniButton/UniButton'
import GroupButton from '../GroupButton/GroupButton'


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
                    <ButtonRef item={item} onClick={onActive} />
                </div>
            </div>

            <div className={"card__title"}>
                {item.title} • ₽<span><b>{item.price}</b></span>
            </div>
            <div className="btn-container">
                {count === 0 ?
                    <UniButton title={"ADD"} onClick={addItem} sx={{borderRadius: "10px"}}/> :
                    <GroupButton onRemove={removeItem} onAdd={addItem} />
                    // <div className='container'>
                    //     <UniButton title={"-"} onClick={removeItem} sx={{width: "20px"}}/>
                    //     <UniButton title={"+"} onClick={addItem} sx={{width: "20px"}}/>
                    // </div>
                }
            </div>

            {moreInfo && (
                <div className="card-more-overlay">
                    <CardMore item={item} onClose={onDisactive} />
                </div>
            )}
        </div>
    )
}

export default Card