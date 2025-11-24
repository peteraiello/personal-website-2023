import { createContext } from 'react';

interface IThemeContext {
  darkThemeActive: boolean;
  toggleDarkTheme?: () => void;
  modalOpen: boolean;
  toggleModal?: () => void;
}

export const defaultState = {
    modalOpen: false,
    darkThemeActive: true,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);
