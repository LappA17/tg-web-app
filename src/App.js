import React, {useEffect} from 'react';
const tg = window.Telegram.WebApp;
const App = () => {
    useEffect(() => {
        // ready сообщает что приложение полностью приинициализировалось и его можно отрисовывать
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <button onClick={onClose}>
            Close
        </button>
    );
};

export default App;