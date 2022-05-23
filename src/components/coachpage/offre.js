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
      <article className=" w-10/12 lg:w-8/12   py-10 flex flex-col  m-auto b   ">
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
        <section className="py-10 gap-y-10 flex flex-col md:grid grid-cols-3 lg:w-10/12 m-auto ">
          <div className=" py-5 px-10 flex flex-col  ">
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
            <h3 className="text-xl  ">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre1}
            </h3>
            <p className=" text-m   font-black mb-5">
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
          <div className=" py-5 px-10 flex flex-col ">
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
            <h3 className="text-xl   ">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre2}
            </h3>
            <p className=" text-m   font-black mb-5">
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
          <div className=" py-5 px-10 flex flex-col ">
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
            <h3 className="text-xl   ">
              {data.datoCmsPageAccompagnementIndividuel.titreOffre3}
            </h3>
            <p className=" text-m   font-black mb-5">
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
