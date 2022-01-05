import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro, Benefits, Quote } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<Benefits />
		<Quote />
	</Layout>
)

export default IndexPage
