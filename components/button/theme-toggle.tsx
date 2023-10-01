import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { MoonIcon } from "../icons/moon-icon";
import { SunIcon } from "../icons/sun-icon";

export const ThemeToggleButton = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('dark theme active', darkThemeActive);
        toggleDarkTheme();
    }

    return (
        <div className="flex items-center">
            <label className={'inline-block h-[34px] relative w-[68px]'} htmlFor="checkbox"> 
                <button className={'block'} aria-pressed="false" id="checkbox" onClick={(e) => clickHandler(e)}>
                    <div className={`transition-all duration-300 dark:bg-white bg-black m-0 p-[3px] relative left-0 top-0 right-0 cursor-pointer duration-400 rounded-full h-full`}>
                        <div className={`dark:bg-black bg-white transition-all duration-300 ease-linear h-[28px] w-[28px] rounded-full`}>
                            <div className="flex items-center w-full h-full justify-center overflow-hidden relative">
                                <div className={`transition-all absolute duration-300 ease-in-out ${darkThemeActive === true ? 'translate-y-0' : '-translate-y-[30px]'}`}>
                                    <MoonIcon />
                                </div>
                                <div className={`transition-all absolute duration-300 ease-in-out ${darkThemeActive === false ? 'translate-y-0' : 'translate-y-[30px]'}`}>
                                    <SunIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </label>
        </div>
    )
}