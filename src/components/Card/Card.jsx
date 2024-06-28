import React from 'react'
import Button from '../Button/Button'

function Card() {
  return (
    <div>
        Card
        <Button title={"Добавить"} type={"add"} disable={false} />
        <Button title={"Убрать"} type={"remove"} disable={false} />
    </div>
  )
}

export default Card