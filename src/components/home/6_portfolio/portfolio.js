import React from 'react'
import { Container, Title } from '@UI'
import { portfolio } from '@data'
import * as styles from './portfolio.module.scss'

const Portfolio = () => {
	return (
		<Container wrapper isSection className={styles.container}>
			<Title tag='h2' className={styles.title}>
				Portfolio
			</Title>

			<div className={styles.logosContainer}>
				{portfolio.map(({ logo, link, text }, index) => (
					<div className={styles.logoContainer} key={index}>
						{link ? (
							<a
								href={link}
								className={styles.logo}
								target='_blank'
								rel='noreferrer'
								aria-label={`visit ${text} website`}
							>
								{logo}
							</a>
						) : (
							<span className={styles.logo}>{logo}</span>
						)}
					</div>
				))}
			</div>
		</Container>
	)
}

export default Portfolio
