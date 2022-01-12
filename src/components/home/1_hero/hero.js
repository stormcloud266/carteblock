import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title, Button } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd>
				<Container textBlock className={styles.textContainer}>
					<Title tag='h1'>Blockchain Challenges, Unblocked.</Title>
					<p>
						We help startups & enterprises leverage decentralized solutions &
						capitalize on blockchain technology to introduce a new level of
						transparency, efficiency & automation into their business processes.
					</p>
					<Button href='mailto:info@carteblock.com'>Say Hello</Button>
				</Container>
				<div>
					<StaticImage
						src='../../../assets/images/PIXEL/CB-ILL-O1.png'
						alt=''
						placeholder='blurred'
						loading='eager'
					/>
				</div>
			</Flex>
		</Container>
	)
}

export default Hero
