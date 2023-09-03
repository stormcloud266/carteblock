import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Algorand,
  Opulous,
  Omnys,
  Tinyman,
  Unifty,
  Openfabric,
  Rif,
  XpNetwork,
  Tokemak,
  InvestDao,
} from "@images/icons";

export const footerLinks = [
  {
    text: "Email",
    link: "mailto:info@carteblock.com",
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/company/carteblock/",
  },
  {
    text: "Twitter",
    link: "https://twitter.com/CarteBlockPR/media",
  },
];

export const benefits = [
  {
    title: "Strategy",
    description:
      "We offer technical strategy evaluations to determine the best course of action for your business.",
  },
  {
    title: "Advisory",
    description:
      "With the insights gained from our years of working in the technical space, we can help you tackle your challenges with sound and feasible solutions that bring measurable efficiency.",
  },
  {
    title: "Operations",
    description:
      "Our team and wide industry network can offer the best architecture, development and integration support.",
  },
];

export const services = [
  {
    title: "Technology Services",
    excerpt:
      "Finding the optimal technical solution to your business’ needs does not have to be a challenge.",
    list: [
      "Technical strategy evaluation",
      "Foundation formation",
      "Introductions to technical and development teams",
      "Introduction to industry partners",
    ],
    lightImage: (
      <StaticImage
        src="./assets/images/PIXEL/LIGHT/CB-ILLO-A_LIGHT.png"
        alt=""
        placeholder="blurred"
      />
    ),
    darkImage: (
      <StaticImage
        src="./assets/images/PIXEL/DARK/CB-ILLO-A_DARK.png"
        alt=""
        placeholder="blurred"
      />
    ),
  },
  {
    title: "Compliance",
    excerpt:
      "Our specialist legal operations teams will help you to identify exactly how to best navigate compliance.",
    list: [
      "Intros to legal teams with specializations in new technologies, regulatory compliance, IP, etc...",
      "Best platform and product practices and documentation",
    ],
    lightImage: (
      <StaticImage
        src="./assets/images/PIXEL/LIGHT/CB-ILLO-B_LIGHT.png"
        alt=""
        placeholder="blurred"
      />
    ),
    darkImage: (
      <StaticImage
        src="./assets/images/PIXEL/DARK/CB-ILLO-B_DARK.png"
        alt=""
        placeholder="blurred"
      />
    ),
  },
  {
    title: "Accounting & Finance",
    excerpt:
      "As a trusted partner, we are able to help manage your accounting and financial systems.",
    list: [
      {
        title: "Maintenance of internal financial systems",
        list: [
          "Bookkeeping and maintenance of financial records",
          "Financial reports and presentations",
        ],
      },
      "Tax submissions & liaisons with tax authorities",
    ],
    lightImage: (
      <StaticImage
        src="./assets/images/PIXEL/LIGHT/CB-ILLO-E_LIGHT.png"
        alt=""
        placeholder="blurred"
      />
    ),
    darkImage: (
      <StaticImage
        src="./assets/images/PIXEL/DARK/CB-ILLO-E_DARK.png"
        alt=""
        placeholder="blurred"
      />
    ),
  },
];

export const portfolio = [
  {
    logo: <Algorand />,
    text: "algorand",
    link: "https://algorand.foundation/",
  },
  {
    logo: <Opulous />,
    text: "opulous",
    link: "https://opulous.org/",
  },

  {
    logo: <Omnys />,
    link: "",
  },
  {
    logo: <Tinyman />,
    text: "tinyman",
    link: "https://tinyman.org/",
  },
  {
    logo: <Unifty />,
    text: "unifty",
    link: "https://www.unifty.com/",
  },
  {
    logo: <Openfabric />,
    text: "openfabric",
    link: "https://openfabric.ai/",
  },
  {
    logo: <Rif />,
    text: "rif",
    link: "https://www.rifos.org/",
  },
  {
    logo: <XpNetwork />,
    text: "xpnetwork",
    link: "https://xp.network/",
  },
  {
    logo: <Tokemak />,
    text: "tokemak",
    link: "https://www.tokemak.xyz/",
  },
  {
    logo: <InvestDao />,
    text: "investdao",
    link: "https://investdao.io/",
  },
];
