import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade, Parallax } from '@animations'
import { Container, Flex, Title, Button } from '@UI'
import * as styles from './intro.module.scss'

const Intro = () => {
	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd>
				<Parallax offset={30}>
					<Fade y={30} duration={2}>
						<StaticImage
							src='../../../assets/images/PIXEL/CB-ILL-O2.png'
							alt=''
							placeholder='blurred'
						/>
					</Fade>
				</Parallax>
				<Container textBlock>
					<Fade delay={0.3}>
						<Title size={2}>
							Carteblock is a management
							<br />
							consultancy that solves global blockchain challenges.
						</Title>
					</Fade>
					<Fade delay={0.6}>
						<p>
							We help startups & enterprises leverage decentralized solutions &
							capitalize on blockchain technology to introduce a new level of
							transparency, efficiency & automation into their business
							processes.
						</p>
					</Fade>
					<Button href='/#services' anchor>
						Our Services
					</Button>
				</Container>
			</Flex>
		</Container>
	)
}

export default Intro
