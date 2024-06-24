const tg = window.Telegram.WebApp

export default function ButtonClose() {
  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div>
        <h3>{tg.initDataUnsafe.user.first_name}</h3>
        <button onClick={onClose}>Закрыть web-приложение</button>
      </div>
    </>
  )
}

