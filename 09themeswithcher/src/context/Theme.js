import { createContext,useContext } from "react";
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
}) 
export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}
/*
why we use default 
✅ Default export:
import useTheme from './ThemeContext';
✅ Named export:
import { ThemeContext, ThemeContextProvider } from './ThemeContext';
*/