import React from 'react'
import PropTypes from 'prop-types'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { ThemeProvider } from '../../context/ThemeContext'

import { Footer, Header } from '@global'
import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	return (
		<>
			<ThemeToggler>
				{({ theme, toggleTheme }) => (
					<ThemeProvider>
						<Header toggleTheme={toggleTheme} theme={theme} />
						<main role='main' id='main' tabIndex='-1'>
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
