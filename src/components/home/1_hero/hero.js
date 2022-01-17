import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title, Button } from '@UI'
import { Fade, Parallax } from '@animations'
import * as styles from './hero.module.scss'
import { useCurrentWidth } from '@hooks'

const Hero = () => {
	const [delay, setDelay] = useState(2.4)
	const width = useCurrentWidth()

	useEffect(() => {
		if (width < 1080) {
			setDelay(0)
		} else {
			setDelay(2.4)
		}
	}, [width])

	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd reverseOnMd>
				<Container textBlock className={styles.textContainer}>
					<Title tag='h1'>
						<Fade inline delay={0.3} duration={1}>
							Blockchain Challenges,
						</Fade>{' '}
						<Fade inline delay={1.3} duration={1}>
							Unblocked.
						</Fade>
					</Title>
					<Fade delay={1.8} duration={1.3}>
						<p>
							We help startups & enterprises leverage decentralized solutions &
							capitalize on blockchain technology to introduce a new level of
							transparency, efficiency & automation into their business
							processes.
						</p>
					</Fade>
					<Button href='mailto:info@carteblock.com' delay={delay}>
						Say Hello
					</Button>
				</Container>
				<Parallax offset={30}>
					<Fade delay={0.4} y={30} duration={2}>
						<StaticImage
							src='../../../assets/images/PIXEL/CB-ILL-O1.png'
							alt=''
							placeholder='blurred'
							loading='eager'
						/>
					</Fade>
				</Parallax>
			</Flex>
		</Container>
	)
}

export default Hero
