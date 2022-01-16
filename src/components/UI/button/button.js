import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Arrow } from '@images/icons'
import * as styles from './button.module.scss'

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
			<a
				href={href}
				className={classes}
				target='_blank'
				rel='noreferrer'
				{...rest}
			>
				{children} <Arrow />
			</a>
		)
	} else if (anchor) {
		return (
			<AnchorLink className={classes} {...rest} to={href}>
				{children} <Arrow />
			</AnchorLink>
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
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
