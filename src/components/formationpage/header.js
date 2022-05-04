import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageFormationCollective {
        titreSectionUn
        titreHeader
        texteHeader
        sousTitreHeader
        imageHeader {
          alt
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <>
      <article className="  py-10 flex flex-col m-auto b w-10/12  ">
        <figure className="m-auto mb-5 ">
          <GatsbyImage
            image={
              data.datoCmsPageFormationCollective.imageHeader
                .gatsbyImageData
            }
            alt={data.datoCmsPageFormationCollective.imageHeader.alt}
          />
        </figure>
        <section className=" pt-10 flex flex-col mb-10 ">
          <h2 className=" text-2xl font-black">
            {data.datoCmsPageFormationCollective.sousTitreHeader}
          </h2>
          <h1 className="text-2xl">
            {data.datoCmsPageFormationCollective.titreHeader}
          </h1>
        </section>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFormationCollective.texteHeader,
          }}
        />
      </article>
     
    </>
  );
};

export default Header;
