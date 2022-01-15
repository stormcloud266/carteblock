import React from 'react'
import { Container, Flex, Title } from '@UI'
import { benefits } from '@data'
import * as styles from './benefits.module.scss'

const Benefits = () => {
	return (
		<Container wrapperSmOnMd isSection>
			<Flex alignStart noHorizontalMargin noCollapseMargin collapseOnMd>
				{benefits.map(({ title, description }, index) => (
					<div key={title} className={styles.container}>
						<Title size={3} tag='p' className={styles.label}>
							0{index + 1}
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
