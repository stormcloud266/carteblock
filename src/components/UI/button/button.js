import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Arrow } from '@images/icons'
import * as styles from './button.module.scss'

const Button = ({ href, to, cta, children, className, noBlank, ...rest }) => {
	const classes = classnames(
		cta && styles.cta,
		styles.button,
		className && className
	)

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				target={noBlank ? null : '_blank'}
				rel={noBlank ? null : 'noreferrer'}
				{...rest}
			>
				{children} <Arrow />
			</a>
		)
	} else if (to) {
		return (
			<Link to={to} {...rest} className={classes}>
				{children} <Arrow />
			</Link>
		)
	} else {
		return (
			<button {...rest} className={classes}>
				{children} <Arrow />
			</button>
		)
	}
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	cta: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
