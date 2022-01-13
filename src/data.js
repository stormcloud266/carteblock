import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const footerLinks = [
	{
		text: 'Email',
		link: 'mailto:info@carteblock.com',
	},
	{
		text: 'LinkedIn',
		link: 'https://www.linkedin.com/company/carteblock/',
	},
	{
		text: 'Telegram',
		link: '',
	},
	{
		text: 'Twitter',
		link: 'https://twitter.com/CarteBlockPR/media',
	},
]

export const benefits = [
	{
		title: 'Strategy',
		description:
			'We offer technical strategy evaluations to determine the best course of action for your business.',
	},
	{
		title: 'Advisory',
		description:
			'With the insights gained from our years working in the blockchain space, we can help you tackle your challenges with technically sound & feasible solutions that bring measurable efficiency.',
	},
	{
		title: 'Operations',
		description:
			'Our team & wide industry network can offer the best architecture, development and integration support.',
	},
]

export const services = [
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

export const portfolio = [
	{
		text: 'algorand',
		link: 'https://algorand.foundation/',
	},
	{
		text: 'opulous',
		link: 'https://opulous.org/',
	},
	{
		text: 'omnys',
		link: '',
	},
	{
		text: 'tinyman',
		link: 'https://tinyman.org/',
	},
	{
		text: 'unifty',
		link: 'https://www.unifty.com/',
	},
	{
		text: 'openfabric',
		link: 'https://openfabric.ai/',
	},
	{
		text: 'rif',
		link: 'https://www.rifos.org/',
	},
	{
		text: 'xpnetwork',
		link: 'https://xp.network/',
	},
	{
		text: 'tokemak',
		link: 'https://www.tokemak.xyz/',
	},
	{
		text: 'investdao',
		link: 'https://investdao.io/',
	},
]
