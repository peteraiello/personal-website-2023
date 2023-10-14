import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Gradient } from "../gradients/gradient";
import { GradientWrapper } from "../gradients/gradientWrapper";

export const AppWrapper = ({children}) => {

    const {darkThemeActive} = useContext(ThemeContext);

    {console.log(darkThemeActive)}

    return (
        <div className={darkThemeActive === true ? 'dark' : '' }>

            <GradientWrapper>
                {darkThemeActive === true &&
                    <>
                        <Gradient fromColour={'darkGray'} toColour={'black'} gradientDirection={'top-to-bottom'} opacity={'full'} zIndex="-z-[1]"/>
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