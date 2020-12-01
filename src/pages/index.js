import React from "react";

import Layout from "../components/common/layout";
import SEO from "../components/common/seo";

import config from "../../data/SiteConfig";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <SEO />
      <div>Hello world!</div>
    </Layout>
  );
};

export default Home;
