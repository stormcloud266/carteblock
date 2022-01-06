import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro, Benefits, Quote, Portfolio, Cta } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<Benefits />
		<Quote />
		<Portfolio />
		<Cta />
	</Layout>
)

export default IndexPage
