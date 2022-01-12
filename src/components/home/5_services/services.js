import React, { useState, useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { ThemeContext } from '@context/ThemeContext'
import { Container, Flex, Title } from '@UI'
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
	const { isLightTheme, setIsLightTheme } = useContext(ThemeContext)

	const data = [
		{
			title: 'Blockchain Services',
			excerpt:
				'Finding the optimal technical solution to your business’ needs does not have to be a challenge.',
			list: [
				'Technical strategy evaluation',
				'Foundation formation',
				'Introductions to Smart Contract auditors',
				'Introduction to Industry partners from: NFT, DeFi platforms, Influencers etc...',
			],
			lightImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/LIGHT/CB-ILLO-A_LIGHT.png'
					alt=''
					placeholder='blurred'
				/>
			),
			darkImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/DARK/CB-ILLO-A_DARK.png'
					alt=''
					placeholder='blurred'
				/>
			),
		},
		{
			title: 'Token Services',
			excerpt:
				'Our team has expertise with designing lucrative & workable token economies.',
			list: [
				'Formation of token & management strategy',
				{
					title: 'Design & structuring of the token economy',
					list: [
						'Pricing & project valuation',
						'Vesting schedules & category splits',
					],
				},
				'Intros & negotiations with exchanges',
				'Intros & negotiations with market makers & liquidity providers',
				'Access to launch protection programs & other auxiliary services',
			],
			lightImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/LIGHT/CB-ILLO-B_LIGHT.png'
					alt=''
					placeholder='blurred'
				/>
			),
			darkImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/DARK/CB-ILLO-B_DARK.png'
					alt=''
					placeholder='blurred'
				/>
			),
		},
		{
			title: 'Crypto Banking',
			excerpt:
				'Ensuring that you have all of the right connections to truly make your money work for you.',
			list: [
				{
					title: 'Intros to crypto payment processing platforms',
					list: [
						'Compatibility with USDC in; Ethereum, Algorand, Solana & Stellar protocols',
					],
				},
				'Remote blockchain-specialized banking set-up',
				'Market Makers',
			],
			lightImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/LIGHT/CB-ILLO-C_LIGHT.png'
					alt=''
					placeholder='blurred'
				/>
			),
			darkImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/DARK/CB-ILLO-C_DARK.png'
					alt=''
					placeholder='blurred'
				/>
			),
		},
		{
			title: 'Legal & Compliance',
			excerpt:
				'Our specialist legal teams will help you to identify exactly how to best navigate compliance.',
			list: [
				'Intros to legal teams with specializations in blockchain & fintech, technology, regulatory & financial compliance, IP, etc...',
				'Best practices & documentation for KYC/AML Policies & Procedures, T&Cs etc...',
				'Access to third-party KYC providers',
			],
			lightImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/LIGHT/CB-ILLO-D_LIGHT.png'
					alt=''
					placeholder='blurred'
				/>
			),
			darkImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/DARK/CB-ILLO-D_DARK.png'
					alt=''
					placeholder='blurred'
				/>
			),
		},
		{
			title: 'Accounting & Finance',
			excerpt:
				'As a trusted partner we are able to help manage all of your accounting & financial systems.',
			list: [
				{
					title: 'Maintenance of internal financial systems',
					list: [
						'Bookkeeping, maintenance of financial records, disbursements & payroll   (fiat & cryptocurrency)',
					],
				},
				'Financial reports & presentations',
				'Tax submissions & liaisons with tax authorities',
			],
			lightImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/LIGHT/CB-ILLO-E_LIGHT.png'
					alt=''
					placeholder='blurred'
				/>
			),
			darkImage: (
				<StaticImage
					src='../../../assets/images/PIXEL/DARK/CB-ILLO-E_DARK.png'
					alt=''
					placeholder='blurred'
				/>
			),
		},
	]

	return (
		<Container
			wrapperSmOnMd
			isSection
			className={styles.container}
			id='services'
		>
			<Flex collapseOnMd reverseOnMd className={styles.marginBottom}>
				<div className={styles.buttonsContainer}>
					{data.map(({ title }, index) => (
						<motion.button
							animate={{
								color: isLightTheme
									? active === index
										? '#000'
										: '#ccc'
									: active === index
									? '#eee'
									: '#333',
							}}
							key={title}
							onClick={() => setActive(index)}
							className={styles.button}
						>
							<Title className={styles.title}>{title}</Title>
						</motion.button>
					))}
				</div>

				<div className={styles.imagesContainer}>
					<motion.div
						variants={variants}
						initial={'initial'}
						animate={'animate'}
						key={active}
					>
						{isLightTheme ? data[active].lightImage : data[active].darkImage}
					</motion.div>
				</div>
			</Flex>

			<Flex alignStart collapseOnMd>
				<motion.div
					variants={variants}
					initial={'initial'}
					animate={'animate'}
					key={data[active].excerpt}
					className={styles.excerptContainer}
				>
					<Title tag='p' size={3} className={styles.excerpt}>
						{data[active].excerpt}
					</Title>
				</motion.div>

				<motion.ul
					variants={variants}
					initial={'initial'}
					animate={'animate'}
					key={data[active].title}
					className={styles.list}
				>
					{data[active].list.map((item) =>
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
