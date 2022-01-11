import React from 'react'
import { Container, Flex, Title } from '@UI'
import * as styles from './benefits.module.scss'

const Benefits = () => {
	const data = [
		{
			title: 'Strategy',
			description:
				'We offer technical strategy evaluations to determine the best course of action for your business.',
		},
		{
			title: 'Advisory',
			description:
				'With the insights gained from our years working in the blockchain space, we can help you tackle your challenges with technically sound & feasible solutions that bring measurable efficiency.',
		},
		{
			title: 'Operations',
			description:
				'Our team & wide industry network can offer the best architecture, development and integration support.',
		},
	]

	return (
		<Container wrapper isSection>
			<Flex alignStart noHorizontalMargin>
				{data.map(({ title, description }, index) => (
					<div key={title} className={styles.container}>
						<Title size={2} tag='p' className={styles.label}>
							0{index + 1}_
						</Title>
						<Title tag='h3' size={2}>
							{title}
						</Title>
						<p className={styles.description}>{description}</p>
					</div>
				))}
			</Flex>
		</Container>
	)
}

export default Benefits
