import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title } from '@UI'
import * as styles from './quote.module.scss'

const Quote = () => {
	return (
		<Container wrapper section>
			<Flex>
				<div className={styles.imageContainer}>
					<StaticImage
						src='../../../assets/images/PIXEL/CB-CHROME-BG-LIGHT.png'
						alt=''
					/>
				</div>
				<Container textBlock>
					<Title tag='h2' size={3} className={styles.title}>
						“We develop actionable blockchain strategies, while supporting your
						team through the necessary steps for growing your operation.”
					</Title>
					<p>
						“With our extensive advisory experience and connections in the tech
						and venture capital industries, we focus on developing synergetic
						long-term partnerships”
					</p>
					<p>- Miles Carroll</p>
					<p>CEO, Carteblock</p>
				</Container>
			</Flex>
		</Container>
	)
}

export default Quote
