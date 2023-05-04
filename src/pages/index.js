import * as React from "react";
import Layout from "../components/layout";
import Home from "../components/homepage/home";
import SectionTwo from "../components/homepage/sectionTwo";
import SectionThree from "../components/homepage/sectionThree";
import SectionFour from "../components/homepage/sectionFour";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title= "Satorea - Acceuil"
description = "Je t’accompagne dans le développement de tes pages sur les réseaux sociaux. "
/>
      <Home />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Layout>
  );
};

export default IndexPage;
