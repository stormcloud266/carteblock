import React, { createContext, useState } from 'react'

export const HeaderOpacityContext = createContext()

export function HeaderOpacityProvider({ children }) {
	const [isHeaderHidden, setIsHeaderHidden] = useState(false)

	return (
		<HeaderOpacityContext.Provider
			value={{ isHeaderHidden, setIsHeaderHidden }}
		>
			{children}
		</HeaderOpacityContext.Provider>
	)
}
