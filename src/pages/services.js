import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/servicespage/header";
import Formation from "../components/servicespage/formation";
import Coaching from "../components/servicespage/coaching";
import Feedservice from "../components/servicespage/feed-service";
import Seo from "../components/seo";

const ServicesPage = () => {
  return (
    <Layout>
      
      <Seo title= "Satorea - Services"
description = "Les services que je vous propose "
/>

     <Header />
     <Coaching />
<Formation />   
<Feedservice />
    </Layout>
  );
};

export default ServicesPage;
