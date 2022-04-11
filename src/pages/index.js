import * as React from "react";
import Layout from "../components/layout";
import Home from "../components/homepage/home";
import SectionTwo from "../components/homepage/sectionTwo";
import SectionThree from "../components/homepage/sectionThree";
import SectionFour from "../components/homepage/sectionFour";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Layout>
  );
};

export default IndexPage;
