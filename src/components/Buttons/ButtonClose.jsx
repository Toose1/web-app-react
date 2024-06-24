import { useTelegram } from "../../hooks/useTelegram"
import './components/Buttons/ButtonClose.css'

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

