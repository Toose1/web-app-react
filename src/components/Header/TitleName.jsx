import { useTelegram } from "../../hooks/useTelegram"

export default function TitleName() {
  const {user, onSpecialButton} = useTelegram()

  return (
    <>
      <h5>Здравствуйте {useTelegram().user.first_name}</h5>
      <button onClick={onSpecialButton}></button>
    </>
  )
}