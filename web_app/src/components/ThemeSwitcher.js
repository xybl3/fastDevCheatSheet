import { useContext } from "react";

import React from 'react'
import ThemeState from "../state/ThemeState";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useContext(ThemeState)

  return (
    <>
    <h4>Theme: {theme ? "LIGHT": "DARK"}</h4>
    <button onClick={()=>{
        setTheme(!theme)
    }}>Swap</button>
    </>
  )
}
