import { useState, createContext, useContext } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState('light')
    const themeChanger = () =>{
        if(themeMode==='light') setThemeMode('dark')
        else if(themeMode==='dark') setThemeMode('light')
    }

    return(
        <ThemeContext.Provider value={{themeMode, themeChanger}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider