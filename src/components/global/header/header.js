import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Container } from '@UI'
import { Logo } from '@images/icons'
import * as styles from './header.module.scss'

const Header = ({ toggleTheme }) => {
	const [hasToggledTheme, setHasToggledTheme] = useState(() => {
		const saved = localStorage.getItem('hasToggledTheme')
		const initialValue = JSON.parse(saved)
		console.log('saved: ', initialValue)
		return initialValue || false
	})
	const [time, setTime] = useState()

	const getTime = () => {
		const newTime = new Date().toLocaleString('en-GB', {
			timeZone: 'Asia/Singapore',
			hour: '2-digit',
			minute: '2-digit',
		})

		return newTime
	}

	useEffect(() => {
		setTime(getTime())

		const interval = setInterval(() => {
			setTime(getTime())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (!hasToggledTheme) {
			const hours = parseInt(getTime().substring(0, 2))
			if (hours < 1) {
				toggleTheme('light')
			} else {
				toggleTheme('dark')
			}
		} else {
			localStorage.setItem('hasToggledTheme', JSON.stringify(true))
		}
	}, [hasToggledTheme])

	const handleThemeToggle = (theme) => {
		toggleTheme(theme)
		setHasToggledTheme(true)
	}

	return (
		<>
			<header className={styles.header}>
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
						onClick={() => handleThemeToggle('light')}
						aria-label='use light theme.'
					>
						day
					</button>

					<button
						className={styles.toggle}
						onClick={() => handleThemeToggle('dark')}
						aria-label='use dark theme.'
					>
						night
					</button>
				</div>
			</Container>
		</>
	)
}

export default Header
