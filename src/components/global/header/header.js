import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import { Container } from '@UI'
import { Logo } from '@images/icons'
import * as styles from './header.module.scss'

const Header = () => {
	const [isLightTheme, setIsLightTheme] = useState(true)
	const [time, setTime] = useState()

	const getTime = () => {
		const date = new Date().toLocaleString('en-GB', {
			timeZone: 'Asia/Singapore',
			hour: '2-digit',
			minute: '2-digit',
		})

		return date
	}

	useEffect(() => {
		setTime(getTime())

		const interval = setInterval(() => {
			setTime(getTime())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<header className={styles.header}>
				<Helmet
					bodyAttributes={{
						class: isLightTheme ? 'light' : 'dark',
					}}
				/>
				<Container wrapper className={styles.container}>
					<Link to='/' className={styles.logo}>
						<Logo />
					</Link>

					<div className={styles.clockContainer}>
						<time className={styles.clock}>{time} SNG</time>
					</div>
				</Container>
			</header>

			<Container wrapper className={styles.togglesWrapper}>
				<div className={styles.togglesPosition}>
					<button
						className={styles.toggle}
						onClick={() => setIsLightTheme(true)}
						aria-label=''
					>
						day
					</button>

					<button
						className={styles.toggle}
						onClick={() => setIsLightTheme(false)}
						aria-label=''
					>
						night
					</button>
				</div>
			</Container>
		</>
	)
}

export default Header
