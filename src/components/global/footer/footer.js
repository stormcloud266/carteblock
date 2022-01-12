import React from 'react'
import { Link } from 'gatsby'
import { Container, Title } from '@UI'
import { Logo } from '@images/icons'
import * as styles from './footer.module.scss'

const Footer = () => {
	const data = [
		{
			text: 'Email',
			link: 'mailto:info@carteblock.com',
		},
		{
			text: 'LinkedIn',
			link: 'https://www.linkedin.com/company/carteblock/',
		},
		{
			text: 'Telegram',
			link: '',
		},
		{
			text: 'Twitter',
			link: 'https://twitter.com/CarteBlockPR/media',
		},
	]

	return (
		<footer className={styles.footer}>
			<Container wrapperSmOnMd>
				<div className={styles.row}>
					<Link
						to='/'
						aria-label='return to top of the page'
						className={styles.logo}
					>
						<Logo />
					</Link>

					<nav className={styles.nav}>
						{data.map(({ text, link }) => (
							<a href={link} key={text} target='_blank' rel='noreferrer'>
								{text}
							</a>
						))}
					</nav>
				</div>

				<div className={styles.row}>
					<div className={styles.smallText}>
						<p>5 Shenton Way, #10-01</p>
						<p>UIC Building, Singapore 068808</p>
					</div>
					<p className={styles.smallText}>&copy; Carteblock 2022</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
