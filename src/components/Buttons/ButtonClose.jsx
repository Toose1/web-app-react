const tg = window.Telegram.WebApp

export default function ButtonClose() {
  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div>
        <h2>{tg.initDataUnsafe.user.first_name}</h2>
        <button onClick={onClose}>Закрыть web-приложение</button>
      </div>
    </>
  )
}

