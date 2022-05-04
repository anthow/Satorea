import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const Groupe = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageAccompagnementIndividuel {
        titreDePage
        sousTitreHeader
        paragrapheHeader
        titreAccompagnement
        texteAccompagnement
        imageHeader {
          gatsbyImageData(height: 1200, width: 3000)
          alt
        }
      }
    }
  `);
  return (
    <>
      <article className="  py-10 flex flex-col m-auto  gap-y-20 w-10/12  ">
        <section>
        <h2 className=" text-2xl   font-black ">
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
            <h3 className="text-5xl font-black">Construire sa présence de marque</h3>
            <h4 className="text-3xl font-thin">sur Facebook et Instagram</h4>
            <p>
              Tu souhaites accroître la visibilité de tes pages sur Facebook ou
              sur Instagram ? Dans cette formation, développe une stratégie sur
              le long terme pour gagner du temps.{" "}
            </p>
            <div className=" flex gap-x-4">
            <button  className=" bg-secondary-color w-max hover:bg-fourth-color rounded text-white p-2"> En savoir plus</button>
            <button  className=" bg-secondary-color w-max hover:bg-fourth-color rounded text-white p-2"> Voir les autres formations</button>

            </div>
          </div>
          <figure>
            <StaticImage
              src="https://res.cloudinary.com/olanetsoft/image/upload/v1554336410/samples/bike.jpg"
              placeholder="blurred"
              width={600}
              height={600}
              formats={["auto", "webp", "avif"]}
              alt="A Dog Image"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
              quality={90}
            />
          </figure>
        </section>
      </article>
    </>
  );
};

export default Groupe;
