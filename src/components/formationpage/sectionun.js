import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Sectionun = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageFormationCollective {
        titreSectionUn
        texteSectionUn
      }
    }
  `);
  return (
    <>
      <article className="  py-10 flex flex-col m-auto b w-10/12  ">
    <h2 className="text-3xl">{data.datoCmsPageFormationCollective.titreSectionUn}</h2>
    <div
          className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFormationCollective.texteSectionUn,
          }}
        />
      </article>
     
    </>
  );
};

export default Sectionun;
