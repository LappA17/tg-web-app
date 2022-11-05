import React, {useEffect} from 'react';
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const App = () => {
    const {tg, onToggleButton} = useTelegram()
    useEffect(() => {
        // ready сообщает что приложение полностью приинициализировалось и его можно отрисовывать
        tg.ready()
    }, [])

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
};

export default App;

/*
    Мы создали файл netlify.toml потому что Реакт у нас single page application, а наш сервер notlify который раздаёт нам статику пытается найти маршрут /form а такого маршрута не существует, потому что, потому что все маршруты у нас искуственные и сделаны с Реакт-роутер-дом
 */