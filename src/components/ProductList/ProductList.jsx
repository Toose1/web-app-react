import { useState } from "react"
import CardItem from "../CardItem/CardItem"
import { useTelegram } from "../../hooks/useTelegram"
import img_cookie from "../media/cookie.png"
import "./ProductList.css";
import ConfirimForm from './components/ConfirimForm/ConfirimForm'

const products = [
  {id: 1, title: "Donate package 1", price: 49, description: "We'll save your cookies ;)", image: img_cookie},
  {id: 2, title: "Donate package 2", price: 99, description: "Donut but not ancient map position", image: img_cookie},
  {id: 3, title: "Donate package 3", price: 149, description: "ice baby", image: img_cookie},
  {id: 4, title: "Donate package 4", price: 199, description: "mamma mia pizza deliziosa", image: img_cookie},
  {id: 5, title: "Donate package 5", price: 299, description: "52 52 52", image: img_cookie},
  {id: 6, title: "Donate package 6", price: 499, description: "Burger but not Gucci store", image: img_cookie}
]

function sumOfQuantity(items) {
  let total = 0
  for(let item of items){
    total += item.quantity
  }
  return total
}

export default function ProductList() {
  const [current, setCurrent] = useState("ProductList")
  const [addedItems, setAddedItems] = useState([])
  const {tg} = useTelegram()

  tg.onEvent("mainButtonClicked", () => {
    setCurrent("ConfirimForm")
    tg.MainButton.setParams({
      text: `Пizda`
    })
  })

  const onAdd = (item) => {
    let exist = addedItems.find(i => i.id === item.id)
    let cart = []
    if(exist) {
      cart = addedItems.map(i => i.id === item.id ? {...exist, quantity: exist.quantity + 1 } : i)
      setAddedItems(cart)
    } else {
      cart = [...addedItems, {...item, quantity: 1}]
      setAddedItems(cart)
    }

    if (cart.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Показать корзину`
      })
    }

  }

  const onRemove = (item) => {
    let exist = addedItems.find(i => i.id === item.id)
    let cart = []
    if(exist.quantity === 1) {
      cart = addedItems.filter(x => x.id !== item.id)
      setAddedItems(cart)
    } else {
      cart = addedItems.map(x => x.id === item.id ? {...exist, quantity: exist.quantity - 1} : x)
      setAddedItems(cart)
    }
    
    if (cart.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Показать корзину`
      })
    }
  }
    
  return (
    <>
    {
      current ? "ProductList" (
        <section className="cards">
          <div className="container container__cards">
            {products.map(item => (
              <CardItem item={item} onAdd={onAdd} onRemove={onRemove} />
            ))}
          </div>
      </section>
      ) : <ConfirimForm />
      
    } 
    </>
  )
}