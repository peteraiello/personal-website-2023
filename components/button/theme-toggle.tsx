import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { MoonIcon } from "../icons/moon-icon";
import { SunIcon } from "../icons/sun-icon";

export const ThemeToggleButton = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    const clickHandler = (e) => {
        e.preventDefault();
        toggleDarkTheme();
        localStorage.setItem("darkTheme", darkThemeActive === false ? 'true' : 'false');
    }

    return (
        <div className="flex items-center">
            <button className={'inline-block h-[34px] bg-lightGray relative rounded-full w-[68px]'} onClick={(e) => clickHandler(e)} aria-label="Toggle Dark Theme"> 
                <span className={`block w-[34px] focus:rounded-full transition-all duration-300 ${darkThemeActive === true ? 'translate-x-[33px]' : 'translate-x-0'} `}>
                    <span className={`block transition-all duration-300 dark:bg-brandGold bg-brandBlue m-0 p-[3px] relative left-0 top-0 right-0 cursor-pointer duration-400 rounded-full h-full`}>
                        <span className={`block dark:bg-black bg-white transition-all duration-300 ease-linear h-[28px] w-[28px] rounded-full`}>
                            <span className="flex items-center w-full h-full justify-center overflow-hidden relative">
                                <span className={`transition-all absolute duration-300 ease-in-out ${darkThemeActive === true ? 'translate-y-0' : '-translate-y-[30px]'}`}>
                                    <MoonIcon />
                                </span>
                                <span className={`transition-all absolute duration-300 ease-in-out ${darkThemeActive === false ? 'translate-y-0' : 'translate-y-[30px]'}`}>
                                    <SunIcon />
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </button>
        </div>
    )
}