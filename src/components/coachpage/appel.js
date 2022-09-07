import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Appel = () => {
  const data = useStaticQuery(graphql`
    {
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
  `);
  return (
    <>
      <article className="  py-10 flex flex-col m-auto b w-12/12  ">
        <section className="w-10/12 flex flex-col gap-y-10 m-auto mb-5">
          <h2 className="text-2xl font-semibold">
            {data.datoCmsPageAccompagnementIndividuel.titreSectionBoutonAppel}
          </h2>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html:
                data.datoCmsPageAccompagnementIndividuel
                  .texteIntroductionSectionBoutonDAppel,
            }}
          />
        </section>
        <section className="flex flex-col w-10/12 m-auto md:grid grid-cols-2 md:pr-24 gap-y-10 gap-x-20">
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
            <h4 className=" text-lg font-regular ">
              {" "}
              {
                data.datoCmsPageAccompagnementIndividuel
                  .sousTitreSectionBoutonDAppel
              }{" "}
            </h4>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsPageAccompagnementIndividuel
                    .texteSousSectionBoutonDAppel,
              }}
            />
            <a href="mailto:info@satorea.be">
        <button className="p-2 px-5 text-lg rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
                {data.datoCmsPageAccompagnementIndividuel.texteBouton}{" "}
              </button>
            </a>
          </div>
        </section>
      </article>
    </>
  );
};

export default Appel;
