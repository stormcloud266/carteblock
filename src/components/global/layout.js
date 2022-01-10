import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { Footer, Header, SkipLink } from '@global'
import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	const mainRef = useRef()

	return (
		<>
			<ThemeToggler>
				{({ theme, toggleTheme }) => (
					<>
						<SkipLink main={mainRef} />
						<Header toggleTheme={toggleTheme} />
						<main role='main' id='main' tabIndex='-1' ref={mainRef}>
							{children}
						</main>
						<Footer />
					</>
				)}
			</ThemeToggler>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
