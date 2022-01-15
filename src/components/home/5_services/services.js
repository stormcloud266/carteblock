import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '@context/ThemeContext'
import { Container, Flex, Title } from '@UI'
import { services } from '@data'
import * as styles from './services.module.scss'

const variants = {
	initial: {
		opacity: 0,
		transition: { duration: 0.7 },
	},
	animate: {
		opacity: 1,
		transition: { duration: 0.7 },
	},
}

const Services = () => {
	const [active, setActive] = useState(0)
	const { isLightTheme } = useContext(ThemeContext)

	return (
		<Container
			wrapperSmOnMd
			isSection
			className={styles.container}
			id='services'
		>
			<Flex
				collapseOnMd
				reverseOnMd
				noCollapseMargin
				className={styles.marginBottom}
			>
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

				<div
					className={styles.imagesContainer}
					style={{ opacity: isLightTheme !== null ? 1 : 0 }}
				>
					<motion.div
						variants={variants}
						initial={'initial'}
						animate={'animate'}
						key={active}
					>
						{isLightTheme
							? services[active].lightImage
							: services[active].darkImage}
					</motion.div>
				</div>
			</Flex>

			<Flex alignStart collapseOnMd>
				<motion.div
					variants={variants}
					initial={'initial'}
					animate={'animate'}
					key={services[active].excerpt}
					className={styles.excerptContainer}
				>
					<Title tag='p' size={3} className={styles.excerpt}>
						{services[active].excerpt}
					</Title>
				</motion.div>

				<motion.ul
					variants={variants}
					initial={'initial'}
					animate={'animate'}
					key={services[active].title}
					className={styles.list}
				>
					{services[active].list.map((item) =>
						typeof item === 'string' ? (
							<li key={item}>
								<span className={styles.dot}>{item}</span>
							</li>
						) : (
							<li key={item.title}>
								<span className={styles.dot}>{item.title}</span>
								<ul className={styles.subList}>
									{item.list.map((subItem) => (
										<li key={subItem}>
											<span className={styles.dash}>{subItem}</span>
										</li>
									))}
								</ul>
							</li>
						)
					)}
				</motion.ul>
			</Flex>
		</Container>
	)
}

export default Services
