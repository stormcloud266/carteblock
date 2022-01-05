import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Footer, Header, SkipLink } from '@global'
import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	const mainRef = useRef()

	return (
		<>
			<SkipLink main={mainRef} />
			<Header />
			<main role='main' id='main' tabIndex='-1' ref={mainRef}>
				{children}
			</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
