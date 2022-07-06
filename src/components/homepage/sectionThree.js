import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Feedservice from "./feedservices";

const SectionThree = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHomepage {
        titreIntroductionService
        texteIntroductionService
        coachingTitre
        coachingTexte
        coachingSousTitre
        coachingImage {
          gatsbyImageData
          alt
        }
        titreFormationCollective
        sousTitreFormationCollective
        texteFormationCollectives
        imageFormationCollective {
          alt
          gatsbyImageData
        }
      }
    }
  `)
  return <article className="w-12/12 py-0 pb-10 md:pb-0 md:py-10 md:my-10 flex">
  <section className="m-auto w-10/12">
    <h2 className=" text-3xl font-semibold mb-10">{data.datoCmsHomepage.titreIntroductionService}</h2>
    <p className="mb-20">
     
     {data.datoCmsHomepage.texteIntroductionService}
    </p>
    <div className="flex flex-col mb-20 items-center gap-x-20 md:grid grid-cols-2 gap-x-4">
      <figure className="m-auto mb-10 md:mb-0 ">
      <GatsbyImage 
      image={data.datoCmsHomepage.coachingImage.gatsbyImageData} 
      alt={data.datoCmsHomepage.coachingImage.alt} />

      </figure>
      <div>
        <h3 className="text-2xl font-black mb-2 md:mb-5">{data.datoCmsHomepage.coachingTitre}</h3>
        <h4 className="italic text-xl mb-10">{data.datoCmsHomepage.coachingSousTitre}</h4>
        <div
    className="mb-10 md:w-10/12"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.coachingTexte
          }}
        />
        <Link to="/coaching">
          <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
            En savoir plus
          </button>
  
        </Link>
      </div>
    </div>
    <div className="flex flex-col items-center gap-x-20  md:grid grid-cols-2 gap-x-4">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-black  mb-2 md:mb-5">{data.datoCmsHomepage.titreFormationCollective}</h3>
        <h4 className="italic text-xl mb-10">{data.datoCmsHomepage.sousTitreFormationCollective}</h4>
        <div
    className="mb-10 md:w-10/12"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.texteFormationCollectives
          }}      
        />
        <Link to="/formations">
        <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
            En savoir plus
          </button>
        </Link>
      </div>
      <figure className="m-auto order-1 mb-10 md:mb-0 md:order-2 ">
      <GatsbyImage 
      image={data.datoCmsHomepage.imageFormationCollective.gatsbyImageData} 
      alt={data.datoCmsHomepage.imageFormationCollective.alt} />

      </figure>
    </div>
    <Feedservice />
  </section>
</article>
}

export default SectionThree






