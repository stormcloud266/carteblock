import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { Container } from '@UI'
import { Logo } from '@images/icons'
import * as styles from './header.module.scss'
import { ThemeContext } from '@context/ThemeContext'
import { HeaderOpacityContext } from '@context/HeaderOpacityContext'

const Header = ({ toggleTheme, theme }) => {
	const [hasToggledTheme, setHasToggledTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('hasToggledTheme')
			const initialValue = JSON.parse(saved)
			return initialValue || false
		} else {
			return false
		}
	})
	const [time, setTime] = useState()
	const { setIsLightTheme } = useContext(ThemeContext)
	const { isHeaderHidden } = useContext(HeaderOpacityContext)

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
		<motion.header
			animate={{ y: isHeaderHidden ? '-100%' : 0 }}
			transition={{ type: 'tween' }}
			className={styles.header}
		>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					<Logo />
				</Link>

				<div>
					<time className={styles.clock}>{time} SNG</time>
					<motion.button
						animate={{
							borderColor: theme === 'light' ? '#ccc' : 'rgba(0,0,0,0)',
							color: theme === 'light' ? '#ccc' : '#666',
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
							borderColor: theme === 'dark' ? '#ccc' : 'rgba(0,0,0,0)',
							color: theme === 'dark' ? '#ccc' : '#666',
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
		</motion.header>
	)
}

export default Header
