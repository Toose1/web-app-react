const tg = window.Telegram.WebApp

export default function ButtonClose() {
  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div>
        <button onClick={onClose}>Закрыть web-приложение</button>
      </div>
    </>
  )
}

