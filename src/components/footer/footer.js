import React from "react";
import Sectionone from "./section_one";
import Sectiontwo from "./section_two";
import Sectionthree from "./section_three";
import SectionZero from "./section_zero";
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    datoCmsFooter {
      copyright
      referenceDev
    }
  }
`)
  return <footer className="block w-12/12 text-white ">
    <SectionZero />
<article className=" w-12/12 bg-third-color ">
  <section className="w-10/12 md:m-auto py-20 px-3 md:px-0 gap-y-10 flex items-top flex-col md:grid grid-cols-4 ">
<Sectionone />
<Sectiontwo />
<Sectionthree />
</section>
<p className="w-10/12 m-auto">{data.datoCmsFooter.copyright}</p>
<p className="w-10/12 text-sm m-auto">Site réalisé par <a href="https://liono.be/" 
target="_blank" rel="noreferrer">Liono</a></p>

</article>

    </footer>

 
}



export default Footer;
