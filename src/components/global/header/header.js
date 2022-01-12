import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { Container } from '@UI'
import { Logo } from '@images/icons'
import * as styles from './header.module.scss'
import { ThemeContext } from '@context/ThemeContext'

const Header = ({ toggleTheme, theme }) => {
	const [hasToggledTheme, setHasToggledTheme] = useState(() => {
		const saved = localStorage.getItem('hasToggledTheme')
		const initialValue = JSON.parse(saved)
		return initialValue || false
	})
	const [time, setTime] = useState()
	const { isLightTheme, setIsLightTheme } = useContext(ThemeContext)

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
			if (hours >= 6 && hours < 18) {
				toggleTheme('light')
			} else {
				toggleTheme('dark')
			}
		} else {
			localStorage.setItem('hasToggledTheme', JSON.stringify(true))
		}
	}, [hasToggledTheme, toggleTheme])

	useEffect(() => {
		setIsLightTheme(theme === 'light' ? true : false)
	}, [theme, setIsLightTheme])

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

					<div>
						<time className={styles.clock}>{time} SNG</time>
					</div>
				</Container>
			</header>

			<Container wrapper className={styles.togglesWrapper}>
				<div className={styles.togglesPosition}>
					<motion.button
						animate={{
							borderColor: isLightTheme ? '#ccc' : 'rgba(0,0,0,0)',
							color: isLightTheme ? '#ccc' : '#666',
						}}
						transition={{ duration: 0.3 }}
						className={styles.toggle}
						onClick={() => handleThemeToggle('light')}
						aria-label='use light theme.'
					>
						day
					</motion.button>

					<motion.button
						animate={{
							borderColor: !isLightTheme ? '#ccc' : 'rgba(0,0,0,0)',
							color: !isLightTheme ? '#ccc' : '#666',
						}}
						transition={{ duration: 0.3 }}
						className={styles.toggle}
						onClick={() => handleThemeToggle('dark')}
						aria-label='use dark theme.'
					>
						night
					</motion.button>
				</div>
			</Container>
		</>
	)
}

export default Header
