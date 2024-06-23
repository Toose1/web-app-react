

export default function TitleName() {
  const tg = window.Telegram.WebApp

  return (
    <>
      <h1>{tg.initDataUnsafe.user.first_name}</h1>
    </>
  )
}