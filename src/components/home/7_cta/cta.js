import React, { useContext, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
import { Fade, Parallax } from '@animations'
import { Button, Container, Flex, Title } from '@UI'
import { HeaderOpacityContext } from '@context/HeaderOpacityContext'
import * as styles from './cta.module.scss'

const Cta = () => {
	const { inView, ref } = useInView({ triggerOnce: false })
	const { setIsHeaderHidden } = useContext(HeaderOpacityContext)

	useEffect(() => {
		if (inView) {
			setIsHeaderHidden(true)
		} else {
			setIsHeaderHidden(false)
		}
	}, [inView, setIsHeaderHidden])

	return (
		<Container wrapperSmOnMd isSection>
			<Flex collapseOnMd reverseOnMd>
				<div className={styles.textContainer}>
					<Fade>
						<Title size={2} className={styles.title}>
							It is Carteblock’s mission to prepare business’ for the future and
							uncover value in every step of the way forward...
						</Title>
					</Fade>

					<div ref={ref}>
						<Button href='mailto:info@carteblock.com'>Get In Touch</Button>
					</div>
				</div>

				<Parallax offset={30}>
					<Fade duration={2} y={30}>
						<StaticImage
							src='../../../assets/images/PIXEL/ILLO1FINAL.png'
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

export default Cta
