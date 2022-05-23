import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Formation = () => {
  const data = useStaticQuery(graphql`
 {
  datoCmsPageService {
    imageFormationPartieUn {
      alt
      gatsbyImageData
    }
    imageFormationPartieDeux {
      alt
      gatsbyImageData
    }
    texteFormationPartieUn
    texteFormationPartieDeux
    titreFormationPartieUn
    titreFormationPartieDeux
  }
}



  `);
  return (<>
  <article className="  py-10  flex flex-col m-auto w-10/12 ">
 <h3 className="text-2xl font-black mb-5">{data.datoCmsPageService.titreFormationPartieUn}</h3>

 <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
 <figure className=" order-1  ">
         
            <GatsbyImage image={data.datoCmsPageService.imageFormationPartieUn.gatsbyImageData}
            alt={data.datoCmsPageService.imageFormationPartieUn.alt} />
          </figure>
          <div className="order-2 ">
          
            <div
              className="mb-10 md:w-10/12"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.texteFormationPartieUn,
              }}
            />
          </div>
          </section>

          <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
 <figure className=" order-1 md:order-2">
        
            <GatsbyImage image={data.datoCmsPageService.imageFormationPartieDeux.gatsbyImageData}
            alt={data.datoCmsPageService.imageFormationPartieDeux.alt} />
          </figure>
          <div className="flex flex-col order-2 md:order-1">
          <h2 className="text-2xl font-black mb-5">{data.datoCmsPageService.titreFormationPartieDeux}</h2>
          <div
              className="mb-10 md:w-10/12"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.texteFormationPartieDeux,
              }}
            />
            <Link to="../formations">
            <button className="p-2  rounded-xl text-white font-black bg-secondary-color hover:bg-fourth-color rounded-sm">
              En savoir plus              
              </button>
    
            </Link>
          </div>
          </section>
</article>
         </>
  );
};

export default Formation;
