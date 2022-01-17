import React from 'react'
import { Link } from 'gatsby'
import { Container } from '@UI'
import { Fade } from '@animations'
import { Logo } from '@images/icons'
import { footerLinks } from '@data'
import * as styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Fade>
				<Container wrapper>
					<div className={styles.row}>
						<Link
							to='/'
							aria-label='return to top of the page'
							className={styles.logo}
						>
							<Logo />
						</Link>

						<nav className={styles.nav}>
							{footerLinks.map(({ text, link }) => (
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
			</Fade>
		</footer>
	)
}

export default Footer
