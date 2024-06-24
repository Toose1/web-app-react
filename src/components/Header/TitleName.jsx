

export default function TitleName() {
  const tg = window.Telegram.WebApp

  return (
    <>
      <h5>Здравствуйте {tg.initDataUnsafe.user.first_name}</h5>
    </>
  )
}