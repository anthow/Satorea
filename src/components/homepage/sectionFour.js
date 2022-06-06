import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const SectionFour = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHomepage {
        titreIntroductionTemoignage
        titreTemoignageUn
        titreTemoignageDeux
        titreTemoignageQuatre
        titreTemoignageTrois
        texteTemoignageDeux
        texteTemoignageQuatre
        texteTemoignageTrois
        texteTemoignage
        nomTemoignage
        nomTemoignageDeux
        nomTemoignageQuatre
        nomTemoignageTrois
        urlTemoignageUn
        urlTemoignageTrois
        urlTemoignageQuatre
        urlTemoignageDeux
        professionTemoignageDeux
        professionTemoignageQuatre
        professionTemoignageTrois
        professionTemoignageUn
        portrait {
          alt
          gatsbyImageData(width: 150, height: 150)
        }
        portraitDeux {
          alt
          gatsbyImageData(width: 150, height: 150)
        }
        portraitQuatre {
          alt
          gatsbyImageData(width: 150, height: 150)
        }
        portraitTrois {
          gatsbyImageData(width: 150, height: 150)
          alt
        }
      }
    }
  `);
  return (
    <div className=" md:min-h-9/10 py-10 ">
      <article className="w-12/12  flex">
        <section className="m-auto w-10/12">
          <h2 className=" text-3xl mb-20">
            {data.datoCmsHomepage.titreIntroductionTemoignage}
          </h2>
        </section>
      </article>
      <article className=" md:w-9/12 w-11/12  m-auto items-center justify-center">
        <div className="  flex flex-col lg:grid grid-cols-2 ">
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <GatsbyImage
                image={data.datoCmsHomepage.portrait.gatsbyImageData}
                alt={data.datoCmsHomepage.portrait.alt}
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">
                {data.datoCmsHomepage.titreTemoignageUn}
              </h4>
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsHomepage.texteTemoignage,
                }}
              />
              <div className="text-xs flex italic">
                <a className="text-secondary-color" href={data.datoCmsHomepage.urlTemoignageUn} target="_blank" rel="noreferrer"> {data.datoCmsHomepage.nomTemoignage}</a><p>{data.datoCmsHomepage.professionTemoignageUn} </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <GatsbyImage
                image={data.datoCmsHomepage.portraitDeux.gatsbyImageData}
                alt={data.datoCmsHomepage.portraitDeux.alt}
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">
                {data.datoCmsHomepage.titreTemoignageDeux}
              </h4>
              <div
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsHomepage.texteTemoignageDeux,
                }}
              />
              <div className="text-xs flex italic">
              <a className="text-secondary-color" href={data.datoCmsHomepage.urlTemoignageDeux} 
              target="_blank" rel="noreferrer"> {data.datoCmsHomepage.nomTemoignageDeux}</a><p>{data.datoCmsHomepage.professionTemoignageDeux} </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <GatsbyImage
                image={data.datoCmsHomepage.portraitDeux.gatsbyImageData}
                alt={data.datoCmsHomepage.portraitDeux.alt}
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">
                {data.datoCmsHomepage.titreTemoignageTrois}
              </h4>
              <div
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsHomepage.texteTemoignageTrois,
                }}
              />
                <div className="text-xs flex italic">
              <a className="text-secondary-color" href={data.datoCmsHomepage.urlTemoignageTrois} 
              target="_blank" rel="noreferrer" > {data.datoCmsHomepage.nomTemoignageTrois}</a><p>{data.datoCmsHomepage.professionTemoignageTrois} </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SectionFour;
