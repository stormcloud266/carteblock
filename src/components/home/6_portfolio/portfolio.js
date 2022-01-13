import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Title } from '@UI'
import { ThemeContext } from '@context/ThemeContext'
import { portfolio } from '@data'
import * as styles from './portfolio.module.scss'

const Portfolio = () => {
	const { isLightTheme } = useContext(ThemeContext)

	const logos = useStaticQuery(graphql`
		query HeaderQuery {
			dark: allFile(
				filter: {
					sourceInstanceName: { eq: "logos" }
					relativePath: { regex: "/dark/" }
				}
				sort: { order: ASC, fields: name }
			) {
				edges {
					node {
						id
						name
						publicURL
					}
				}
			}
			light: allFile(
				filter: {
					sourceInstanceName: { eq: "logos" }
					relativePath: { regex: "/light/" }
				}
				sort: { order: ASC, fields: name }
			) {
				edges {
					node {
						id
						name
						publicURL
					}
				}
			}
		}
	`)

	return (
		<Container wrapper isSection className={styles.container}>
			<Title tag='h2' className={styles.title}>
				Portfolio
			</Title>
			<div className={styles.logosContainer}>
				{portfolio.map(({ text, link }, index) => {
					const logo =
						logos[isLightTheme ? 'light' : 'dark'].edges[index].node.publicURL
					return link ? (
						<a
							href={link}
							className={styles.logo}
							key={index}
							target='_blank'
							rel='noreferrer'
							aria-label={`visit ${text} website`}
						>
							<img src={logo} alt='' />
						</a>
					) : (
						<span className={styles.logo} key={index}>
							<img src={logo} alt='' />
						</span>
					)
				})}
			</div>
		</Container>
	)
}

export default Portfolio
