import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Fade } from '@animations'
import { Container, Title } from '@UI'
import { portfolio } from '@data'
import * as styles from './portfolio.module.scss'

const Portfolio = () => {
	const container = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	}

	const item = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	}

	const controls = useAnimation()

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.3,
	}

	const [ref, inView] = useInView(inViewOptions)

	if (inView) {
		controls.start('show')
	}

	return (
		<Container wrapper isSection className={styles.container}>
			<Fade>
				<Title tag='h2' className={styles.title}>
					Portfolio
				</Title>
			</Fade>

			<motion.div
				className={styles.logosContainer}
				variants={container}
				initial='hidden'
				animate={controls}
				ref={ref}
			>
				{portfolio.map(({ logo, link, text }, index) => (
					<motion.div
						variants={item}
						className={styles.logoContainer}
						key={index}
					>
						{link ? (
							<a
								href={link}
								className={styles.logo}
								target='_blank'
								rel='noreferrer'
								aria-label={`visit ${text} website`}
							>
								{logo}
							</a>
						) : (
							<span className={styles.logo}>{logo}</span>
						)}
					</motion.div>
				))}
			</motion.div>
		</Container>
	)
}

export default Portfolio
