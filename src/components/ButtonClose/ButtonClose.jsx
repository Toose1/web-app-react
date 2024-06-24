import { useTelegram } from "../../hooks/useTelegram"
import './ButtonClose.css'

export default function ButtonClose() {
  // const {onClose} = useTelegram();
  const btn = () => {
    console.log("was prsd")
  }
  
  return (
    <>
      <div>
        <button onClick={btn}>Закрыть web-приложение</button>
      </div>
    </>
  )
}

