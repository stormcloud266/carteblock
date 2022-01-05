import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro, Benefits } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
		<Benefits />
	</Layout>
)

export default IndexPage
