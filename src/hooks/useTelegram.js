const tg = window.Telegram.WebApp

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onSpecialButton = () => {
        if(!tg.MainButton.isVisible) {
            tg.MainButton.show()
        } else {
            tg.MainButton.hide()
        }
    }

    return {
        onSpecialButton,
        onClose,
        tg,
        user: tg.initDataUnsafe.user
    }
}