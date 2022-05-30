import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Timeline from "../components/coachpage/timeline";
import Header from "../components/coachpage/header";
import Offre from "../components/coachpage/offre";
import Groupe from "../components/footer/groupe";
import Appel from "../components/coachpage/appel";

const CoachingPage = () => {
  return (
    <>

    <Layout>
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
