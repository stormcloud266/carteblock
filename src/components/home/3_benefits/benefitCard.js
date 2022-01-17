import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Title } from '@UI'

import * as styles from './benefits.module.scss'

const BenefitCard = ({ number, title, description }) => {
	const controls = useAnimation()

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1.3 } },
	}

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.05,
	}

	const [ref, inView] = useInView(inViewOptions)

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
		if (!inView) {
			controls.start('hidden')
		}
	}, [controls, inView])

	return (
		<motion.div
			className={styles.sectionContainer}
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
		>
			<Title size={3} tag='p' className={styles.label}>
				{number}
			</Title>
			<Title tag='h3' size={2}>
				{title}
			</Title>
			<p className={styles.description}>{description}</p>
		</motion.div>
	)
}

export default BenefitCard
