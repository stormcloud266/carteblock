import React, { useState, useContext } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ThemeContext } from '@context/ThemeContext'
import { Container, Flex, Title } from '@UI'
import { Fade } from '@animations'
import { services } from '@data'
import * as styles from './services.module.scss'

const excerptVariants = {
	initial: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.7 },
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7 },
	},
}

const listVariants = {
	initial: {
		opacity: 0,
		transition: { duration: 0.7 },
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.7, staggerChildren: 0.25 },
	},
}

const itemVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
}

const imageAnimation = {
	initial: {
		opacity: 0,
		y: 20,
	},
	transition: {
		opacity: { duration: 0.8 },
		default: { duration: 1.3 },
	},
}

const Services = () => {
	const [active, setActive] = useState(0)
	const { isLightTheme } = useContext(ThemeContext)
	const controls = useAnimation()

	const handleImageAnimation = (isVisible) => {
		if (isVisible) {
			controls.start('animate')
		} else {
			controls.start('initial')
		}
	}

	return (
		<Container
			wrapperSmOnMd
			isSection
			className={styles.container}
			id='services'
		>
			<Flex collapseOnMd noCollapseMargin className={styles.marginBottom}>
				<Fade>
					<div className={styles.buttonsContainer}>
						{services.map(({ title }, index) => (
							<motion.button
								animate={{
									color: isLightTheme
										? active === index
											? '#000'
											: '#eee'
										: active === index
										? '#eee'
										: '#333',
								}}
								whileHover={{
									color: isLightTheme
										? active === index
											? '#333'
											: '#44fe70'
										: active === index
										? '#eee'
										: '#44fe70',
								}}
								key={title}
								onClick={() => setActive(index)}
								className={styles.button}
							>
								<Title className={styles.title}>{title}</Title>
							</motion.button>
						))}
					</div>
				</Fade>

				<Fade y={30} duration={2}>
					<div
						className={styles.imagesContainer}
						style={{ opacity: isLightTheme !== null ? 1 : 0 }}
					>
						{services.map(({ lightImage, darkImage }, index) => {
							return (
								<React.Fragment key={`${index + 1}`}>
									<motion.div
										initial={imageAnimation.initial}
										style={{
											position: index === 0 ? 'relative' : 'absolute',
											top: 0,
											left: 0,
										}}
										animate={{
											opacity: active === index && isLightTheme ? 1 : 0,
											y: active === index && isLightTheme ? 0 : 20,
										}}
										transition={imageAnimation.transition}
									>
										{lightImage}
									</motion.div>
									<motion.div
										style={{ position: 'absolute', top: 0, left: 0 }}
										initial={imageAnimation.initial}
										animate={{
											opacity: active === index && !isLightTheme ? 1 : 0,
											y: active === index && !isLightTheme ? 0 : 20,
										}}
										transition={imageAnimation.transition}
									>
										{darkImage}
									</motion.div>
								</React.Fragment>
							)
						})}
					</div>
				</Fade>
			</Flex>

			<Flex alignStart collapseOnMd>
				<Fade>
					<motion.div
						variants={excerptVariants}
						initial={'initial'}
						animate={'animate'}
						key={services[active].excerpt}
						className={styles.excerptContainer}
					>
						<Title tag='p' size={3} className={styles.excerpt}>
							{services[active].excerpt}
						</Title>
					</motion.div>
				</Fade>

				<Fade>
					<motion.ul
						variants={listVariants}
						initial={'initial'}
						animate={'animate'}
						key={services[active].title}
						className={styles.list}
					>
						{services[active].list.map((item) =>
							typeof item === 'string' ? (
								<motion.li key={item} variants={itemVariants}>
									<span className={styles.dot}>{item}</span>
								</motion.li>
							) : (
								<motion.li key={item.title} variants={itemVariants}>
									<span className={styles.dot}>{item.title}</span>
									<ul className={styles.subList}>
										{item.list.map((subItem) => (
											<li key={subItem}>
												<span className={styles.dash}>{subItem}</span>
											</li>
										))}
									</ul>
								</motion.li>
							)
						)}
					</motion.ul>
				</Fade>
			</Flex>
		</Container>
	)
}

export default Services
