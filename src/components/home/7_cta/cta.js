import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Button, Container, Flex, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
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
	)
}

export default Cta
