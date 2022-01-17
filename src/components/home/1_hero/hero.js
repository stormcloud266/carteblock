import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container, Flex, Title, Button } from '@UI'
import { Fade, Parallax } from '@animations'
import * as styles from './hero.module.scss'

const Hero = () => {
	const pVariants = {
		hidden: { opacity: 0, transition: { duration: 1.3 } },
		visible: { opacity: 1, transition: { duration: 1.3, delay: 1.8 } },
	}

	const controls = useAnimation()

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.3,
	}

	const [ref, inView] = useInView(inViewOptions)

	if (inView) {
		controls.start('visible')
	}

	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd reverseOnMd>
				<Container textBlock>
					<Title tag='h1'>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 1 }}
						>
							Blockchain Challenges,
						</motion.span>{' '}
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.3, duration: 1 }}
						>
							Unblocked.
						</motion.span>
					</Title>
					<motion.p variants={pVariants} initial='hidden' animate='visible'>
						We help startups & enterprises leverage decentralized solutions &
						capitalize on blockchain technology to introduce a new level of
						transparency, efficiency & automation into their business processes.
					</motion.p>
					<Button href='mailto:info@carteblock.com'>Say Hello</Button>
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
