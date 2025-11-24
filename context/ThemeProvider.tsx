import React from 'react';
import {useState, FC} from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';
import { defaultState } from './ThemeContext/ThemeContext';

type Props = {
  children : React.ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => { 

  const [modalOpen, setModalOpen] = useState(defaultState.modalOpen);

  const [darkThemeActive, setDarkThemeActive] = useState(defaultState.darkThemeActive);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleDarkTheme = () => {
    setDarkThemeActive(!darkThemeActive);
  }

  return(
   <ThemeContext.Provider
      value={{        
        modalOpen,
        toggleModal,
        darkThemeActive,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

