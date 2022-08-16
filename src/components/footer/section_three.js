import { Link } from "gatsby";
import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Sectionthree = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsFooter {
        titreTroisiemeSection
      }
    }
  `)
  return (
    <article className=" flex   flex-col gap-y-5 justify-self-center">
      <h4 className="text-xl text-white">{data.datoCmsFooter.titreTroisiemeSection}</h4>
      <ul>
        <Link to="/">
        <li>Accueil</li>
        </Link>
        <Link to="../../formations">
        <li>Ateliers collectifs</li>
        </Link>
        <Link to="../../coaching">

        <li>Besoin d'un suivi ?</li>
        </Link>
      </ul>
    </article>
  );
};

export default Sectionthree;
