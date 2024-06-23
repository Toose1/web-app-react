const tg = window.Telegram.WebApp

export default function SpanName() {

  return (
    <>
      <div>
        <span>{tg.initDataUnsafe.user.first_name}</span>
      </div>
    </>
  )
}