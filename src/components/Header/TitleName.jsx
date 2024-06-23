

export default function TitleName() {
  const tg = window.Telegram.WebApp

  return (
    <>
      <h2>{tg.initDataUnsafe.user.username}</h2>
    </>
  )
}