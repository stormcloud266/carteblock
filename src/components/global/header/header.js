import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { Container } from '@UI'
import * as styles from './header.module.scss'
import Helmet from 'react-helmet'

const Header = () => {
	const [isLightTheme, setIsLightTheme] = useState(false)

	return (
		<header className={styles.header}>
			<Helmet
				bodyAttributes={{
					class: isLightTheme ? 'light' : 'dark',
				}}
			/>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					Logo
				</Link>

				<div>
					<button
						className={styles.toggle}
						onClick={() => setIsLightTheme(false)}
						aria-label=''
					>
						night
					</button>

					<button
						className={styles.toggle}
						onClick={() => setIsLightTheme(true)}
						aria-label=''
					>
						day
					</button>
				</div>
			</Container>
		</header>
	)
}

export default Header
