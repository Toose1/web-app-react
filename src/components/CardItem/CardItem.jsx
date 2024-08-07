import React, { useState } from 'react'
import Button from '../Button/Button'
import "./CardItem.css"
import ButtonRef from "../ButtonRef/ButtonRef"
import CardMore from '../CardMore/CardMore'
import UniButton from '../UniButton/UniButton'
import GroupButton from '../GroupButton/GroupButton'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function CardItem({item, onAdd, onRemove}) {
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
        <>
            <Card sx={{ maxWidth: 200, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#222222"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                    />
                    <CardContent sx={{p: "3px", color: "white"}}>
                        <Typography variant="body1" component="div">
                            <b>{item.title}</b>
                        </Typography>
                    </CardContent>
                    <CardContent sx={{p: "3px", color: "white", justifyContent: "flex-end"}}>
                        <Typography variant="body2">
                            {item.price} ₽
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent>
                    <div className="btn-container">
                        {count === 0 ?
                            <UniButton title={"ADD"} onClick={addItem} sx={{borderRadius: "10px"}}/> :
                            <GroupButton onRemove={removeItem} onAdd={addItem} />
                        }
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CardItem






// const [count, setCount] = useState(0)
// const [moreInfo, setMoreInfo] = useState(false)

// const addItem = () => {
//     setCount(count+1)
//     onAdd(item)
// }

// const removeItem = () => {

//     setCount(count-1)
//     onRemove(item)
    
// }

// const onActive = () => {
//     setMoreInfo(true)
//     console.log(`${item.title}`)
// }

// const onDisactive = () => {
//     setMoreInfo(false)
// }

// return (
//     <div className='card'>
//         <div className="card_top">
//             <span className={`${count !== 0 ? "card_badge" : "card_badge--hidden"}`}>{count}</span>
//             <div className="image__container">
//                 <ButtonRef item={item} onClick={onActive} />
//             </div>
//         </div>

//         <div className={"card__title"}>
//             {item.title} • ₽<span><b>{item.price}</b></span>
//         </div>
//         <div className="btn-container">
//             {count === 0 ?
//                 <UniButton title={"ADD"} onClick={addItem} sx={{borderRadius: "10px"}}/> :
//                 <GroupButton onRemove={removeItem} onAdd={addItem} />
//             }
//         </div>

//         {moreInfo && (
//             <div className="card-more-overlay">
//                 <CardMore item={item} onClose={onDisactive} />
//             </div>
//         )}
//     </div>
// )