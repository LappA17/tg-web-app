import React, {useEffect} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";

const App = () => {
    const {tg, onToggleButton} = useTelegram()
    useEffect(() => {
        // ready сообщает что приложение полностью приинициализировалось и его можно отрисовывать
        tg.ready()
    }, [])

    return (
        <div className='App'>
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
};

export default App;