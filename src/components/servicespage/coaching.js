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
  <article className="  py-20 mt-10 flex flex-col m-auto w-10/12 ">
 <h3 className="text-2xl font-black mb-5">{data.datoCmsPageService.titreCoachingPartieUn}</h3>

 <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-20">
 <figure className=" order-1 md:order-2   ">
         
            <GatsbyImage image={data.datoCmsPageService.imageCoachingPartieUn.gatsbyImageData}
            alt={data.datoCmsPageService.imageCoachingPartieUn.alt} className="w-full" />
          </figure>
          <div className="order-2 md:order-1 ">
          
            <div
              className="mb-10 md:w-10/12"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.texteCoachingPartieUn,
              }}
            />
          </div>
          </section>

          <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-20">
 <figure className=" order-1 ">
        
            <GatsbyImage image={data.datoCmsPageService.imageCoachingPartieDeux.gatsbyImageData}
            alt={data.datoCmsPageService.imageCoachingPartieDeux.alt} className="w-full h-full" />
          </figure>
          <div className="flex flex-col order-2 ">
          <h2 className="text-2xl font-black mb-5">{data.datoCmsPageService.titreCoachingPartieDeux}</h2>
          <div
              className="mb-10 md:w-10/12"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.texteCoachingPartieDeux,
              }}
            />
            <Link to="../coaching">
            <button className="p-2  rounded-xl text-white font-black bg-secondary-color hover:bg-fourth-color rounded-xl">
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
