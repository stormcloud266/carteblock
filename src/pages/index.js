import React from "react";
import { Layout, Seo } from "@global";
import { Hero, Intro, Benefits, Quote, Services, Cta } from "@home";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Intro />
    <Benefits />
    <Quote />
    <Services />
    <Cta />
  </Layout>
);

export default IndexPage;
