import React from 'react'
import { Button, Container, Title } from '@UI'
import * as styles from './cta.module.scss'

const Cta = () => {
	return (
		<Container section wrapper>
			<Title size={2} className={styles.title}>
				It is Carteblock’s mission to prepare business’ for the future and
				uncover value in every step of the way forward...
			</Title>
			<Button>Get In Touch</Button>
		</Container>
	)
}

export default Cta