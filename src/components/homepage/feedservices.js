import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Feedservice = () => {
  const data = useStaticQuery(graphql`
 {
  allDatoCmsAutresService(filter: {horsLigneEnLigne: {eq: true}}) {
    edges {
      node {
        horsLigneEnLigne
        sousTireDuService
        texteServicePageDAccueil
        nomDuService
        imageServicePageDAccueil {
          alt
          gatsbyImageData
        }
      }
    }
  }
}
  `);
  return (
    <>
      {data.allDatoCmsAutresService.edges.map(({ node }, i) =>
        i % 2 ? (
          <>
            <article className="flex mt-20  flex-col mb-20 items-center gap-x-20 md:grid grid-cols-2 gap-x-4 ">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-black  mb-2 md:mb-5">
                  {node.nomDuService}
                </h3>
                <h4 className=" text-xl mb-10">{node.sousTireDuService}</h4>
                <div
                  className="mb-10 md:w-10/12"
                  dangerouslySetInnerHTML={{
                    __html: node.texteServicePageDAccueil,
                  }}
                />
                <Link to="/formations">
                  <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
                    En savoir plus
                  </button>
                </Link>
              </div>
              <figure className="m-auto order-1 mb-10 md:mb-0 md:order-2 ">
                <GatsbyImage
                  image={node.imageServicePageDAccueil.gatsbyImageData}
                  alt={node.imageServicePageDAccueil.alt}
                />
              </figure>
            </article>
          </>
        ) : (
          <>
            <article className="flex mt-20  flex-col mb-20 items-center gap-x-20 md:grid grid-cols-2 gap-x-4 ">
              <figure className="m-auto mb-10 md:mb-0 ">
                <GatsbyImage
                  image={node.imageServicePageDAccueil.gatsbyImageData}
                  alt={node.imageServicePageDAccueil.alt}
                />
              </figure>
              <div>
                <h3 className="text-2xl font-black mb-2 md:mb-5">
                  {node.nomDuService}
                </h3>
                <h4 className=" text-xl mb-10">{node.sousTireDuService}</h4>
                <div
                  className="mb-10 md:w-10/12"
                  dangerouslySetInnerHTML={{
                    __html: node.texteServicePageDAccueil,
                  }}
                />
                <Link to="/coaching">
                  <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
                    En savoir plus
                  </button>
                </Link>
              </div>
            </article>
          </>
        )
      )}{" "}
    </>
  );
};

export default Feedservice;
