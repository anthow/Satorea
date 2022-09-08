import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const Groupe = () => {
  const data = useStaticQuery(graphql`
   {
    datoCmsFormationCollective(miseEnAvant: {eq: true}) {
      titreFormation
      sousTitreFormation
      texteFormation
      imageFormation {
        gatsbyImageData (width:900)
        alt
      }
    }
  }
  `);
  return (
    <>
      <article className=" mb-10 py-10 flex flex-col m-auto  gap-y-20 w-10/12  ">
        <section>
        <h2 className=" text-2xl font-semibold mb-10 ">
          Tu préfère travailler en groupe ?
        </h2>
        <p>
          En petit groupe, j’anime des ateliers pour comprendre et s’exercer.
          Des formations professionnelles pour s’initier ou se perfectionner au
          marketing digital.
        </p>
        
        </section>
        <section className="flex flex-col md:grid grid-cols-2 gap-x-20">
          <div className="flex flex-col gap-y-5">
            <h3 className="text-2xl font-semibold">{data.datoCmsFormationCollective.sousTitreFormation}</h3>
            <h4 className="text-xl font-thin">{data.datoCmsFormationCollective.titreFormation}</h4>
        
            <div
        className=""
        dangerouslySetInnerHTML={{
          __html: data.datoCmsFormationCollective.texteFormation,
        }}
      />
            <div className=" flex gap-x-4">
                    <button className="p-2 px-5  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
En savoir plus</button>
                    <button className="p-2 px-5 rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
Voir les autres formations</button>

            </div>
          </div>
          <figure>

          <GatsbyImage
            className="mb-5"
            image={
              data.datoCmsFormationCollective
                .imageFormation.gatsbyImageData
            }
            alt={
              data.datoCmsFormationCollective
                .imageFormation.alt
            }
          />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            
      
          </figure>
        </section>
      </article>
    </>
  );
};

export default Groupe;
