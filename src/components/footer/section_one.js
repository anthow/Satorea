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
      <form className="flex w-9/12 w-full md:w-max">
        <input type="text" className="border w-12/12 rounded-l-full p-1" />
        <input
          type="submit"
          value="envoyer"
          className=" bg-secondary-color
           md:pr-4  text-sm md:text-xl md:font-black hover:bg-fourth-color rounded-r-full text-white p-1 md:p-2"
        />
      </form>
    </article>
  );
};

export default Sectionone;
