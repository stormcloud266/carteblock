import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro, Benefits, Quote, Services, Portfolio, Cta } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<Benefits />
		<Quote />
		<Services />
		<Portfolio />
		<Cta />
	</Layout>
)

export default IndexPage
