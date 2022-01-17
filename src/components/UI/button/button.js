import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Arrow } from '@images/icons'
import * as styles from './button.module.scss'

const Wrapper = ({ children }) => {
	const controls = useAnimation()

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } },
	}

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.3,
	}

	const [ref, inView] = useInView(inViewOptions)

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

const MotionArrow = () => {
	const controls = useAnimation()

	const variants = {
		hidden: { x: -7 },
		visible: { x: 0, transition: { duration: 0.5, delay: 0.3 } },
	}

	const inViewOptions = {
		triggerOnce: false,
		threshold: 0.3,
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
	...rest
}) => {
	const classes = classnames(styles.button, className && className)

	if (href && !anchor) {
		return (
			<Wrapper>
				<a
					href={href}
					className={classes}
					target='_blank'
					rel='noreferrer'
					{...rest}
				>
					{children} <MotionArrow />
				</a>
			</Wrapper>
		)
	} else if (anchor) {
		return (
			<Wrapper>
				<AnchorLink className={classes} {...rest} to={href}>
					{children} <MotionArrow />
				</AnchorLink>
			</Wrapper>
		)
	} else if (to) {
		return (
			<Wrapper>
				<Link to={to} {...rest} className={classes}>
					{children} <Arrow />
				</Link>
			</Wrapper>
		)
	} else {
		return (
			<Wrapper>
				<button {...rest} className={classes}>
					{children} <Arrow />
				</button>
			</Wrapper>
		)
	}
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
