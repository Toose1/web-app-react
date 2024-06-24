import { useTelegram } from "../../hooks/useTelegram"
import { useState } from "react"

export default function TitleName() {
  const {user} = useTelegram()
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
      <h5>Здравствуйте {useTelegram().user.first_name}</h5>
      <button onClick={onSpecialButton}>{typeButton}</button>
    </>
  )
}