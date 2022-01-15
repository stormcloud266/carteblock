import React, { useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title } from '@UI'
import { ThemeContext } from '@context/ThemeContext'
import * as styles from './quote.module.scss'

const Quote = () => {
	const { isLightTheme } = useContext(ThemeContext)

	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd>
				<div className={styles.imageContainer}>
					{isLightTheme ? (
						<div style={{ opacity: isLightTheme !== null ? 1 : 0 }}>
							<StaticImage
								src='../../../assets/images/PIXEL/CB-CHROME-BG-LIGHT.png'
								alt=''
								placeholder='blurred'
							/>
						</div>
					) : (
						<div style={{ opacity: isLightTheme !== null ? 1 : 0 }}>
							<StaticImage
								src='../../../assets/images/PIXEL/CB-CHROME-BG-DARK.png'
								alt=''
								placeholder='blurred'
							/>
						</div>
					)}
				</div>
				<Container textBlock className={styles.textContainer}>
					<Title tag='h2' size={3} className={styles.title}>
						“We develop actionable blockchain strategies, while supporting your
						team through the necessary steps for growing your operation.”
					</Title>
					<p>
						“With our extensive advisory experience and connections in the tech
						and venture capital industries, we focus on developing synergetic
						long-term partnerships”
					</p>
					<div className={styles.author}>
						<p>Miles Carroll</p>
						<p>CEO, Carteblock</p>
					</div>
				</Container>
			</Flex>
		</Container>
	)
}

export default Quote
