import React from 'react'
import { Container, Flex } from '@UI'
import { benefits } from '@data'
import * as styles from './benefits.module.scss'
import BenefitCard from './benefitCard'

const Benefits = () => {
	return (
		<Container wrapperSmOnMd isSection className={styles.container}>
			<Flex alignStart noHorizontalMargin noCollapseMargin collapseOnMd>
				{benefits.map(({ title, description }, index) => (
					<BenefitCard
						title={title}
						description={description}
						number={`0${index + 1}`}
						key={title}
					/>
				))}
			</Flex>
		</Container>
	)
}

export default Benefits
