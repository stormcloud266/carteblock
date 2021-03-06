import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [isLightTheme, setIsLightTheme] = useState(null)

	return (
		<ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
