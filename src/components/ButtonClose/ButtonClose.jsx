import { useTelegram } from "../../hooks/useTelegram"
import './ButtonClose.css'

export default function ButtonClose() {
  const {onClose} = useTelegram();
  
  return (
    <>
      <div>
        <button onClick={onClose}>Закрыть web-приложение</button>
      </div>
    </>
  )
}

