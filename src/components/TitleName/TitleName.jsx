import { useTelegram } from "../../hooks/useTelegram"
import { useState } from "react"
import "./TitleName.css"

export default function TitleName() {
  const {tg, user} = useTelegram()
  const [typeButton, setType] = useState("Show main button")

  const onSpecialButton = () => {
    if(!tg.MainButton.isVisible) {
        tg.MainButton.show()
        setType("Hide main button")
    } else {
        tg.MainButton.hide()
        setType("Show main button")
    }
}

  return (
    <>
      <h5>Welcome {user.first_name}</h5>
      <button onClick={onSpecialButton}>{typeButton}</button>
    </>
  )
}