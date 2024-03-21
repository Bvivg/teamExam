"use client"
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("default");

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('default');

  const changeTheme = (type) => {
    setTheme(type);
  }

  return <ThemeContext.Provider value={{theme, changeTheme}}>
    {children}
  </ThemeContext.Provider>
}

export const useTheme = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  return {theme, changeTheme}
}