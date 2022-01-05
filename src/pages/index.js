import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro, Benefits, Quote, Portfolio } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<Benefits />
		<Portfolio />
	</Layout>
)

export default IndexPage
