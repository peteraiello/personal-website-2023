import React, {useContext, useEffect} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Gradient } from "../gradients/gradient";
import { GradientWrapper } from "../gradients/gradientWrapper";

export const AppWrapper = ({children}) => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    useEffect(() => {
        if(localStorage.getItem('darkTheme') === 'true') {
            toggleDarkTheme()
        } 
    }, [])

    return (
        <div className={darkThemeActive === true ? 'dark bg-darkerGray' : '' }>

            <GradientWrapper>
                {darkThemeActive === true &&
                    <>
                        <Gradient fromColour={'darkerGray'} toColour={'black'} gradientDirection={'top-to-bottom'} opacity={'1/4'} zIndex="-z-[1]"/>
                        <Gradient fromColour={'darkGray'} toColour={'brandGold'} gradientDirection={'left-to-right'} opacity={'1/4'} zIndex="-z-[1]"/>   
                    </>
                }
                {darkThemeActive !== true &&
                    <>
                        <Gradient fromColour={'lightGray'} toColour={'white'} gradientDirection={'top-to-bottom'} opacity={'full'} zIndex="-z-[1]"/>
                        <Gradient fromColour={'white'} toColour={'brandBlue'} gradientDirection={'left-to-right'} opacity={'1/4'} zIndex="-z-[1]"/>
                    </>
                }

            {children}
            </GradientWrapper>
        </div>
    )
}