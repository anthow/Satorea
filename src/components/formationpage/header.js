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
      <article className="  pb-10 flex flex-col  b w-full    ">
        <figure className="m-auto mb-5 w-full ">
          <GatsbyImage
            image={
              data.datoCmsPageFormationCollective.imageHeader
                .gatsbyImageData
            } className="w-full"
            alt={data.datoCmsPageFormationCollective.imageHeader.alt}
          />
        </figure>
        <div className="w-10/12 m-auto  "> 
        <section className=" pt-10 flex flex-col mb-10 gap-y-10 ">
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
        </div>
      </article>
      
     
    </>
  );
};

export default Header;
