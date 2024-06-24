

export default function TitleName() {
  const tg = window.Telegram.WebApp

  return (
    <>
      <h3>{tg.initDataUnsafe.user.username}</h3>
    </>
  )
}