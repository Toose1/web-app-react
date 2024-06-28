import React from 'react'
import Button from '../Button/Button'

function Card() {
  return (
    <div>
        Card
        <Button title={"Добавить"} type={"add"} disable={false} onClick={() => console.log("add")}/>
        <Button title={"Убрать"} type={"remove"} disable={false} onClick={() => console.log("remove")}/>
    </div>
  )
}

export default Card