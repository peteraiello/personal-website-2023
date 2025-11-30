import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {useState, FC} from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';
import { defaultState } from './ThemeContext/ThemeContext';

type Props = {
  children : React.ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => { 

  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(defaultState.modalOpen);

  // const [darkThemeActive, setDarkThemeActive] = useState(defaultState.darkThemeActive);

  const [darkThemeActive, setDarkThemeActive] = useState(defaultState.darkThemeActive);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleDarkTheme = () => {
    setDarkThemeActive(!darkThemeActive);
    localStorage.setItem("darkTheme", (!darkThemeActive).toString());
  }

  useEffect(() => {
    const darkThemeLocal = localStorage.getItem("darkTheme");
    if(darkThemeLocal === "false") {
      setDarkThemeActive(false);
    } else {
      setDarkThemeActive(true);
    }
  }, [])

  useEffect(() => {
    const darkThemeLocal = localStorage.getItem("darkTheme");
    if(darkThemeLocal === "false") {
      setDarkThemeActive(false);
    } else {
      setDarkThemeActive(true);
    }
  }, [router?.asPath]);

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

