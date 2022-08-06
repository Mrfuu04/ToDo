import React from "react";
var style = {
};

var button_style = {
    padding: "10px 10px 10px 10px"
}


const Menu = () => {
    return (
        <nav style={style}>
            <form>
                <button style={button_style} type="button">Menu</button>
                <button style={button_style} type="button">Menu</button>
                <button style={button_style} type="button">Menu</button>
            </form>
        </nav>
    )
}


export default Menu;