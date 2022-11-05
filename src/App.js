import React, {useEffect} from 'react';

const App = () => {
    useEffect(() => {
        // ready сообщает что приложение полностью приинициализировалось и его можно отрисовывать
        tg.ready()
    }, [])

    return (
        <button onClick={onClose}>
            Close
        </button>
    );
};

export default App;