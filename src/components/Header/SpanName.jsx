const tg = window.Telegram.WebApp

export default function SpanName() {
  

  return (
    <>
      <div>
        <button>{tg.initDataUnsafe.user.first_name}</button>
      </div>
    </>
  )
}