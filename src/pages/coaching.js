import * as React from "react";
import Layout from "../components/layout";
import Timeline from "../components/coachpage/timeline";
import Header from "../components/coachpage/header";
import Offre from "../components/coachpage/offre";
import Groupe from "../components/footer/groupe";
import Appel from "../components/coachpage/appel";
import Seo from "../components/seo";

const CoachingPage = () => {
  return (
    <>
<Seo title= "Satorea - coaching"
description = "Mon offre d'accompagnement numérique individuel"
/>    <Layout>
      <Header />
          <Timeline />
     <Offre />
    <Appel />
        <Groupe />
    </Layout>
    </>
  );
};

export default CoachingPage;
