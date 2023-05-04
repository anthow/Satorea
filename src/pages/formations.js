import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/formationpage/header";
import Sectionun from "../components/formationpage/sectionun";
import Feedformation from "../components/formationpage/feedformation.js";
import Individuel from "../components/footer/individuel";
import Seo from "../components/seo";

const FormationPage = () => {
  return (
    <Layout>
      <Seo title= "Satorea - Formation"
description = "Mon offre de formation numérique pour les collectifs"
/>
      <Header />
      <Sectionun />
      <Feedformation />
  <Individuel/>
    </Layout>
  );
};

export default FormationPage;


