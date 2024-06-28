import { useState } from "react"
import Card from "../Card/Card"
import { useTelegram } from "../../hooks/useTelegram"

const products = [
  {id: 1, title: "Cookie", price: 200, description: "We'll save your cookies ;)"},
  {id: 2, title: "Donut", price: 150, description: "Donut but not ancient map position"},
  {id: 3, title: "Icecream", price: 160, description: "ice ice ice"},
  {id: 4, title: "Pizza", price: 990, description: "mamma mia pizza deliziosa"},
  {id: 5, title: "Taco", price: 699, description: "52"},
  {id: 6, title: "Burger", price: 900, description: "Burger but not Gucci store"}
]

function sumOfProducts(products) {
  total = 0
  for (i in products) {
    sum += i.price
  }
  return total
}

export default function ProductList() {

  const [addedItems, setAddedItems] = useState([])
  const {tg} = useTelegram()

  const onAdd = (item) => {
    let exist = addedItems.find(i => i.id === item.id)
    if(exist) {
      setAddedItems(
        addedItems.map(i => i.id === item.id ? {...item, quantity: exist.quantity + 1 } : i)
      )
    } else {
      setAddedItems([...addedItems, {...item, quantity: 1}])
    }

    if (addedItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить: ${addedItems.length}`
      })
    }

  }

  const onRemove = (item) => {
    let exist = addedItems.find(i => i.id === item.id)
    if(exist.quantity === 1) {
      setAddedItems(addedItems.sort(x => x.id !== item.id))
    } else {
      setAddedItems(addedItems.map(x => x.id === item.id ? {...exist, quantity: exist.quantity - 1} : x))
    }

    if (addedItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить: ${addedItems.length}`
      })
    }
  }
    
  return (
    <>
      <div className={"list"}>
        {products.map(item => (
          <Card item={item} onAdd={onAdd} onRemove={onRemove}/>
          ))}
      </div>
    </>
  )
}