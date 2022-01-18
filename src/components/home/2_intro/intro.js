import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade, Parallax } from '@animations'
import { Container, Flex, Title, Button } from '@UI'
import { useCurrentWidth } from '@hooks'
import * as styles from './intro.module.scss'

const Intro = () => {
	const [delay, setDelay] = useState(1.2)
	const width = useCurrentWidth()

	useEffect(() => {
		if (width < 1080) {
			setDelay(0)
		} else {
			setDelay(1.2)
		}
	}, [width])

	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd className={styles.flexContainer}>
				<div className={styles.imageContainer}>
					<Parallax offset={30}>
						<Fade y={30} duration={2}>
							<StaticImage
								src='../../../assets/images/PIXEL/CB-ILL-O2.png'
								alt=''
								placeholder='blurred'
							/>
						</Fade>
					</Parallax>
				</div>

				<Container textBlock className={styles.textContainer}>
					<Fade duration={1.6}>
						<Title size={2} className={styles.title}>
							Carteblock is a management consultancy that solves global
							blockchain challenges.
						</Title>
					</Fade>
					<Fade delay={0.8}>
						<p>
							We help startups & enterprises leverage decentralized solutions &
							capitalize on blockchain technology to introduce a new level of
							transparency, efficiency & automation into their business
							processes.
						</p>
					</Fade>
					<Button href='/#services' anchor delay={delay}>
						Our Services
					</Button>
				</Container>
			</Flex>
		</Container>
	)
}

export default Intro
