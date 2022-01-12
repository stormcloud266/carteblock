import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title, Button } from '@UI'
import * as styles from './intro.module.scss'

const Intro = () => {
	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex noHorizontalMargin collapseOnMd reverseOnMd>
				<div>
					<StaticImage
						src='../../../assets/images/PIXEL/CB-ILL-O2.png'
						alt=''
						placeholder='blurred'
					/>
				</div>
				<Container textBlock>
					<Title size={2}>
						Carteblock is a management consultancy that solves global blockchain
						challenges.
					</Title>
					<p>
						We help startups & enterprises leverage decentralized solutions &
						capitalize on blockchain technology to introduce a new level of
						transparency, efficiency & automation into their business processes.
					</p>
					<Button href='#services' noBlank>
						Our Services
					</Button>
				</Container>
			</Flex>
		</Container>
	)
}

export default Intro
