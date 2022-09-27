import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Coaching = () => {
  const data = useStaticQuery(graphql`
 {
  datoCmsPageService {
    imageCoachingPartieDeux {
      gatsbyImageData
      alt
    }
    imageCoachingPartieUn {
      alt
      gatsbyImageData
    }
    texteCoachingPartieDeux
    texteCoachingPartieUn
    titreCoachingPartieDeux
    titreCoachingPartieUn
  }
}



  `);
  return (<>
    <article className=" lg:mt-20 flex flex-col m-auto w-10/12 ">

      <div
        className="text-2xl text-black font-semibold mb-10 lg:mb-5"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsPageService.titreCoachingPartieUn,
        }}
      />
      <section className="flex flex-col mb-20 gap-y-10 
      lg:gap-y-0 items-center md:grid grid-cols-2 gap-x-20">
        <figure className=" order-1 md:order-2   ">

          <GatsbyImage image={data.datoCmsPageService.imageCoachingPartieUn.gatsbyImageData}
            alt={data.datoCmsPageService.imageCoachingPartieUn.alt} className="w-full" />
        </figure>
        <div className="order-2 md:order-1 ">

          <div
            className="lg:mb-10 md:w-10/12"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageService.texteCoachingPartieUn,
            }}
          />
        </div>
      </section>

      <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-20">
        <figure className=" order-1 ">

          <GatsbyImage image={data.datoCmsPageService.imageCoachingPartieDeux.gatsbyImageData}
            alt={data.datoCmsPageService.imageCoachingPartieDeux.alt} className="w-full h-full mb-5"  />
        </figure>
        <div className="flex flex-col order-2 ">
          <h2 className="text-2xl font-regular mb-5">{data.datoCmsPageService.titreCoachingPartieDeux}</h2>
          <div
            className="mb-10 md:w-10/12"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageService.texteCoachingPartieDeux,
            }}
          />
          <Link to="../coaching">
            <button className="p-2 px-5 text-lg rounded-full
             text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
              En savoir plus
            </button>

          </Link>
        </div>
      </section>
    </article>
  </>
  );
};

export default Coaching;
