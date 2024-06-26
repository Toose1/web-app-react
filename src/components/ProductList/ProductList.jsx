import { useState } from "react"
import ProductItem from "../ProductItem/ProductItem"
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

}

export default function ProductList() {

  const [addedItems, setAddedItems] = useState([])
  const {tg} = useTelegram()

  const onAddEvent = (product) => {
    newItems = [...addedItems, product]
    setAddedItems(newItems)
    tg.MainButton.show()
    tg.MainButton.setParams({
    text: "Купить " + sumOfProducts(addedItems)
    })
    // if (addedItems.length === 0) {
    //   tg.MainButton.hide()
    // } else {
    //   tg.MainButton.show()
    //   tg.MainButton.setParams({
    //   text: "Купить " + sumOfProducts(addedItems)
    //   })

    // }
  }
    
  return (
    <>
      <div className={"list"}>
        {products.map(item => (
          <ProductItem product={item} className={"item"} onAdd={onAddEvent}/>
          ))}
      </div>
    </>
  )
}