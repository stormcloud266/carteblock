import React from 'react'
import { Container, Title } from '@UI'
import {
	Algorand,
	Opulous,
	Bluebox,
	Omnys,
	Tinyman,
	Unify,
	Penfabric,
	Rif,
	XpNetwork,
	Tokemak,
	InvestDao,
} from '@images/icons'
import * as styles from './portfolio.module.scss'

const Portfolio = () => {
	const data = [
		{
			logo: <Algorand />,
			link: '',
		},
		{
			logo: <Opulous />,
			link: '',
		},
		{
			logo: <Bluebox />,
			link: '',
		},
		{
			logo: <Omnys />,
			link: '',
		},
		{
			logo: <Tinyman />,
			link: '',
		},
		{
			logo: <Unify />,
			link: '',
		},
		{
			logo: <Penfabric />,
			link: '',
		},
		{
			logo: <Rif />,
			link: '',
		},
		{
			logo: <XpNetwork />,
			link: '',
		},
		{
			logo: <Tokemak />,
			link: '',
		},
		{
			logo: <InvestDao />,
			link: '',
		},
	]

	return (
		<Container wrapper section>
			<Title tag='h2' className={styles.title}>
				Portfolio
			</Title>
			<div className={styles.logosContainer}>
				{data.map(({ logo, link }, index) =>
					link ? (
						<a className={styles.logo} key={index} href={link}>
							{logo}
						</a>
					) : (
						<span className={styles.logo} key={index}>
							{logo}
						</span>
					)
				)}
			</div>
		</Container>
	)
}

export default Portfolio
