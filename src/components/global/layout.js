import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { ThemeProvider } from '../../context/ThemeContext'

import { Footer, Header, SkipLink } from '@global'
import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	const mainRef = useRef()

	return (
		<>
			<ThemeToggler>
				{({ theme, toggleTheme }) => (
					<ThemeProvider>
						<SkipLink main={mainRef} />
						<Header toggleTheme={toggleTheme} theme={theme} />
						<main role='main' id='main' tabIndex='-1' ref={mainRef}>
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				)}
			</ThemeToggler>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
