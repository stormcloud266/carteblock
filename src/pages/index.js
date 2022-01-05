import React from 'react'
import { Layout, Seo } from '@global'
import { Hero, Intro } from '@home'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Hero />
		<Intro />
	</Layout>
)

export default IndexPage
