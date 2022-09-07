import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const Individuel = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsFooter {
      titreIntroduction
      texteIntroduction
      texteBouton
      
    }
    datoCmsPageAccompagnementIndividuel {
      imageSousSectionBoutonDAppel {
        alt
        gatsbyImageData(height: 400)
      }
      sousTitreSectionBoutonDAppel
      texteIntroductionSectionBoutonDAppel
      texteSousSectionBoutonDAppel
      titreSectionBoutonAppel
      titreSousSectionBoutonDAppel
      texteBouton
    }
  }
  `)
  return <article className=" mt-10  py-10 flex flex-col m-auto  gap-y-20 w-10/12  ">
  <section>
  <h2 className=" text-2xl mb-10  font-semibold ">
  {data.datoCmsFooter.titreIntroduction}       </h2>

  <div
        className="  mb-5"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsFooter.texteIntroduction,
        }}
      />


  </section>
  <section className="flex flex-col  m-auto md:grid grid-cols-2 md:pr-24 gap-y-10 gap-x-20">
          <GatsbyImage
            className="mb-5"
            image={
              data.datoCmsPageAccompagnementIndividuel
                .imageSousSectionBoutonDAppel.gatsbyImageData
            }
            alt={
              data.datoCmsPageAccompagnementIndividuel
                .imageSousSectionBoutonDAppel.alt
            }
          />
          <div className=" w-10/12 md:w-12/12 m-auto flex flex-col gap-y-5">
            <h3 className=" text-2xl font-black">
              {" "}
              {
                data.datoCmsPageAccompagnementIndividuel
                  .titreSousSectionBoutonDAppel
              }{" "}
            </h3>
            <h3 className=" text-lg  ">
              {" "}
              {
                data.datoCmsPageAccompagnementIndividuel
                  .sousTitreSectionBoutonDAppel
              }{" "}
            </h3>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsPageAccompagnementIndividuel
                    .texteSousSectionBoutonDAppel,
              }}
            />
            <Link to="../../coaching">
        <button className="p-2 px-5 text-lg rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
                {data.datoCmsFooter.texteBouton}{" "}
              </button>
              </Link>
          </div>
        </section>

</article>
}

export default Individuel


