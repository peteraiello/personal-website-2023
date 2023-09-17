import React from 'react';
import {useState, FC} from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';
import { defaultState } from './ThemeContext/ThemeContext';

type Props = {
  children : React.ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => { 

  const [darkThemeActive, setDarkThemeActive] = useState(defaultState.darkThemeActive);

  const toggleDarkTheme = () => {
    setDarkThemeActive(!darkThemeActive);
  }

  return(
   <ThemeContext.Provider
      value={{
        darkThemeActive,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

