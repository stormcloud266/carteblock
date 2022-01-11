import React from 'react'
import { Container, Title } from '@UI'
import {
	Algorand,
	Opulous,
	Bluebox,
	Omnys,
	Tinyman,
	Unifty,
	Openfabric,
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
			link: 'https://algorand.foundation/',
		},
		{
			logo: <Opulous />,
			link: 'https://opulous.org/',
		},
		{
			logo: <Bluebox />,
			link: 'https://bluebox.info/',
		},
		{
			logo: <Omnys />,
			link: '',
		},
		{
			logo: <Tinyman />,
			link: 'https://tinyman.org/',
		},
		{
			logo: <Unifty />,
			link: 'https://www.unifty.com/',
		},
		{
			logo: <Openfabric />,
			link: 'https://openfabric.ai/',
		},
		{
			logo: <Rif />,
			link: 'https://www.rifos.org/',
		},
		{
			logo: <XpNetwork />,
			link: 'https://xp.network/',
		},
		{
			logo: <Tokemak />,
			link: 'https://www.tokemak.xyz/',
		},
		{
			logo: <InvestDao />,
			link: 'https://investdao.io/',
		},
	]

	return (
		<Container wrapper isSection className={styles.container}>
			<Title tag='h2' className={styles.title}>
				Portfolio
			</Title>
			<div className={styles.logosContainer}>
				{data.map(({ logo, link }, index) =>
					link ? (
						<a
							href={link}
							className={styles.logo}
							key={index}
							target='_blank'
							rel='noreferrer'
						>
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
