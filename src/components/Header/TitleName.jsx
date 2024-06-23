const tg = window.Telegram.WebApp

export default function TitleName() {

  return (
    <>
      <div>
        <h1>{tg.initDataUnsafe.user.first_name}</h1>
      </div>
    </>
  )
}