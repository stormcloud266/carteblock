import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container, Flex, Title } from '@UI'
import { benefits } from '@data'
import * as styles from './benefits.module.scss'

const Benefits = () => {
	const animationControl = useAnimation()
	const animationControl2 = useAnimation()
	const animationControl3 = useAnimation()

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.2,
	}

	const animationOptions = {
		opacity: 1,
		transition: { duration: 1 },
	}

	const [ref, inView] = useInView(inViewOptions)
	const [ref2, inView2] = useInView(inViewOptions)
	const [ref3, inView3] = useInView(inViewOptions)

	if (inView) {
		animationControl.start(animationOptions)
	}

	if (inView2) {
		animationControl2.start(animationOptions)
	}

	if (inView3) {
		animationControl3.start(animationOptions)
	}

	return (
		<div>
			<motion.div>
				<Container wrapperSmOnMd isSection className={styles.container}>
					<Flex
						alignStart
						noHorizontalMargin
						noCollapseMargin
						collapseOnMd
						className={styles.flex}
					>
						<motion.div
							className={styles.sectionContainer}
							ref={ref}
							initial={{ opacity: 0 }}
							animate={animationControl}
						>
							<Title size={3} tag='p' className={styles.label}>
								01
							</Title>
							<Title tag='h3' size={2}>
								{benefits[0].title}
							</Title>
							<p className={styles.description}>{benefits[0].description}</p>
						</motion.div>

						<motion.div
							className={styles.sectionContainer}
							ref={ref2}
							initial={{ opacity: 0 }}
							animate={animationControl2}
						>
							<Title size={3} tag='p' className={styles.label}>
								02
							</Title>
							<Title tag='h3' size={2}>
								{benefits[1].title}
							</Title>
							<p className={styles.description}>{benefits[1].description}</p>
						</motion.div>

						<motion.div
							className={styles.sectionContainer}
							ref={ref3}
							initial={{ opacity: 0 }}
							animate={animationControl3}
						>
							<Title size={3} tag='p' className={styles.label}>
								03
							</Title>
							<Title tag='h3' size={2}>
								{benefits[2].title}
							</Title>
							<p className={styles.description}>{benefits[2].description}</p>
						</motion.div>
					</Flex>
				</Container>
			</motion.div>
		</div>
	)
}

export default Benefits
