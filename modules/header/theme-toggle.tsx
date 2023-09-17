import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const ThemeToggleButton = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('dark theme active', darkThemeActive);
        toggleDarkTheme();
    }

    return(
        <button onClick={(e) => clickHandler(e)}>{darkThemeActive ? 'lights off' : 'lights on'}</button>
    )

}