import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/formationpage/header";
import Sectionun from "../components/formationpage/sectionun";
import Feedformation from "../components/formationpage/feedformation.js";
import Individuel from "../components/footer/individuel";

const FormationPage = () => {
  return (
    <Layout>
      <Header />
      <Sectionun />
      <Feedformation />
  <Individuel/>
    </Layout>
  );
};

export default FormationPage;


