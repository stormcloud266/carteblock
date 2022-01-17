import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Arrow } from '@images/icons'
import * as styles from './button.module.scss'

const inViewOptions = {
	triggerOnce: false,
	threshold: 0.3,
}

const Wrapper = ({ delay, children }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView(inViewOptions)

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1, delay } },
	}

	if (inView) {
		controls.start('visible')
	}

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
		>
			{children}
		</motion.div>
	)
}

const MotionArrow = ({ delay }) => {
	const controls = useAnimation()
	const [ref, inView] = useInView(inViewOptions)
	const [hasTriggered, setHasTriggered] = useState(false)

	const variants = {
		hidden: { x: -7 },
		visible: {
			x: 0,
			transition: { duration: 0.5, delay: !hasTriggered ? delay + 0.3 : 0.3 },
		},
	}

	useEffect(() => {
		if (inView) {
			controls.start('visible')
			setHasTriggered(true)
		}
		if (!inView) {
			controls.start('hidden')
		}
	}, [controls, inView])

	return (
		<motion.span
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={controls}
		>
			<Arrow />
		</motion.span>
	)
}

const Button = ({
	href,
	to,
	anchor,
	solidGreen,
	children,
	className,
	noBlank,
	delay = 0,
	...rest
}) => {
	const classes = classnames(styles.button, className && className)

	let element

	const content = (
		<>
			{children} <MotionArrow delay={delay} />
		</>
	)

	if (href && !anchor) {
		element = (
			<a
				href={href}
				className={classes}
				target='_blank'
				rel='noreferrer'
				{...rest}
			>
				{content}
			</a>
		)
	} else if (anchor) {
		element = (
			<AnchorLink className={classes} {...rest} to={href}>
				{content}
			</AnchorLink>
		)
	} else if (to) {
		element = (
			<Link to={to} {...rest} className={classes}>
				{content}
			</Link>
		)
	} else {
		element = (
			<button {...rest} className={classes}>
				{content}
			</button>
		)
	}

	return <Wrapper delay={delay}>{element}</Wrapper>
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
