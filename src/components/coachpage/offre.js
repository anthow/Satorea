import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Offre = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageAccompagnementIndividuel {
        imageOffre1 {
          alt
          gatsbyImageData(height: 400, width: 600)
        }
        imageOffre2 {
          alt
          gatsbyImageData(height: 400, width: 600)
        }
        imageOffre2Copy1 {
          alt
          gatsbyImageData(height: 400, width: 600)
        }
        prixOffre1
        prixOffre2
        prixOffre3
        texteOffre1
        texteOffre2
        texteOffre3
        texteIntroductionOffre
        titreIntroductionOffre
        titreOffre1
        titreOffre2
        titreOffre3
      }
    }
  `);
  return (
    <>
      <article className="  py-10 flex flex-col  m-auto b w-10/12  ">
        <h2 className=" text-2xl   font-black ">
          {data.datoCmsPageAccompagnementIndividuel.titreIntroductionOffre}
        </h2>
      
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html:
              data.datoCmsPageAccompagnementIndividuel.texteIntroductionOffre,
          }}
        />{" "}
        <section className="py-10 gap-y-10 text-white flex flex-col md:grid grid-cols-3 w-10/12 m-auto ">
          <div className="bg-primary-color py-5 px-10 flex flex-col  bg-gray-200">
            <figure className="  ">
              <GatsbyImage
                className="mb-5"
                image={
                  data.datoCmsPageAccompagnementIndividuel.imageOffre1
                    .gatsbyImageData
                }
                alt={data.datoCmsPageAccompagnementIndividuel.imageOffre1.alt}
              />
            </figure>
            <h3 className="text-xl text-white">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre1}
            </h3>
            <p className=" text-m text-white font-black mb-5">
          {data.datoCmsPageAccompagnementIndividuel.prixOffre1}
        </p>
            <p className="font-black mb-10"> </p>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageAccompagnementIndividuel.texteOffre1,
              }}
            />
          </div>
          <div className="bg-primary-color py-5 px-10 flex flex-col  bg-gray-400">
            <figure className="  ">
              <GatsbyImage
                className="mb-5"
                image={
                  data.datoCmsPageAccompagnementIndividuel.imageOffre2
                    .gatsbyImageData
                }
                alt={data.datoCmsPageAccompagnementIndividuel.imageOffre2.alt}
              />
            </figure>
            <h3 className="text-xl text-white ">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre2}
            </h3>
            <p className=" text-m text-white font-black mb-5">
          {data.datoCmsPageAccompagnementIndividuel.prixOffre2}
        </p>
            <p className="font-black mb-10"> </p>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageAccompagnementIndividuel.texteOffre2,
              }}
            />
          </div>
          <div className="bg-primary-color py-5 px-10 flex flex-col  bg-gray-600">
            <figure className="  ">
              <GatsbyImage
                className="mb-5"
                image={
                  data.datoCmsPageAccompagnementIndividuel.imageOffre2Copy1
                    .gatsbyImageData
                }
                alt={
                  data.datoCmsPageAccompagnementIndividuel.imageOffre2Copy1.alt
                }
              />
            </figure>
            <h3 className="text-xl text-white ">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre3}
            </h3>
            <p className=" text-m text-white font-black mb-5">
          {data.datoCmsPageAccompagnementIndividuel.prixOffre3}
        </p>
            <p className="font-black mb-10"> </p>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageAccompagnementIndividuel.texteOffre3,
              }}
            />
          </div>
        </section>
      </article>
    </>
  );
};

export default Offre;
