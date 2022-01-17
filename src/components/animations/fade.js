import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Fade = ({
	delay = 0,
	duration = 1,
	threshold = 0.2,
	y = 0,
	x = 0,
	triggerOnce = false,
	inline,
	children,
	...rest
}) => {
	const controls = useAnimation()

	const variants = {
		hidden: { opacity: 0, y, x },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration, delay } },
	}

	const inViewOptions = {
		triggerOnce,
		threshold,
	}

	const [ref, inView] = useInView(inViewOptions)

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return inline ? (
		<motion.span
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
			{...rest}
		>
			{children}
		</motion.span>
	) : (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default Fade
