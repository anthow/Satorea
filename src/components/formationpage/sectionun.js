import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
    <h2 id="feed" className="text-2xl mb-10 font-semibold ">{data.datoCmsPageFormationCollective.titreSectionUn}</h2>
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
