import { createContext } from 'react';

interface IThemeContext {
  darkThemeActive: boolean;
  toggleDarkTheme?: () => void;
}

export const defaultState = {
    darkThemeActive: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);
