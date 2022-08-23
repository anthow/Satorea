import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Sectionone = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsFooter {
        titreSectionNewsletter
      }
    }
  `);
  return (
    <article className=" col-span-2 w-10/12">
      <div
        className="text-2xl font-black text-white mb-5"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsFooter.titreSectionNewsletter,
        }}
      />
      <form className="flex w-max">
        <input type="text" className="border rounded-l-full p-2" />
        <input
          type="submit"
          className=" bg-secondary-color pr-4 font-black hover:bg-fourth-color rounded-r-full text-white p-2"
        />
      </form>
    </article>
  );
};

export default Sectionone;
