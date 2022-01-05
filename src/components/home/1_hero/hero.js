import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Flex, Title, Button } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	return (
		<Container wrapper section>
			<Flex>
				<Container textBlock>
					<Title tag='h1'>Blockchain Challenges, Unblocked.</Title>
					<p>
						We help startups & enterprises leverage decentralized solutions &
						capitalize on blockchain technology to introduce a new level of
						transparency, efficiency & automation into their business processes.
					</p>
					<Button>Say Hello</Button>
				</Container>
				<div>
					<StaticImage
						src='../../../assets/images/PIXEL/CB-ILL-O1.png'
						alt=''
					/>
				</div>
			</Flex>
		</Container>
	)
}

export default Hero
