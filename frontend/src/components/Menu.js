import React from "react";
import {Link, BrowserRouter} from 'react-router-dom'


var style = {
};

var button_style = {
    padding: "10px 10px 10px 10px"
}


const Menu = () => {
    return (
        <nav style={style}>
            <Link to={'/'}><button style={button_style} type="button">Проекты</button></Link>
            <Link to={'/todo'}><button style={button_style} type="button">Заметки</button></Link>
            <Link to={'/users'}><button style={button_style} type="button">Пользователи</button></Link>
        </nav>
    )
}


export default Menu;