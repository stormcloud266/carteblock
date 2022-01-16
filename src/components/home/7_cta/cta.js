import React, { useContext, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'
import { Button, Container, Flex, Title } from '@UI'
import { HeaderOpacityContext } from '@context/HeaderOpacityContext'
import * as styles from './cta.module.scss'

const Cta = () => {
	const { inView, entry, ref } = useInView({ triggerOnce: false })
	const { isHeaderHidden, setIsHeaderHidden } = useContext(HeaderOpacityContext)

	console.log('inView: ', inView)

	useEffect(() => {
		if (inView) {
			setIsHeaderHidden(true)
		} else {
			setIsHeaderHidden(false)
		}
	}, [inView])

	return (
		<div ref={ref}>
			<Container wrapperSmOnMd isSection>
				<Flex collapseOnMd reverseOnMd>
					<div className={styles.textContainer}>
						<Title size={2} className={styles.title}>
							It is Carteblock’s mission to prepare business’ for the future and
							uncover value in every step of the way forward...
						</Title>
						<Button href='mailto:info@carteblock.com'>Get In Touch</Button>
					</div>

					<div>
						<StaticImage
							src='../../../assets/images/PIXEL/ILLO1FINAL.png'
							alt=''
							placeholder='blurred'
							loading='eager'
						/>
					</div>
				</Flex>
			</Container>
		</div>
	)
}

export default Cta
