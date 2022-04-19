import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

const SectionTwo = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHomepage {
        titreValeurs
        titreValeursDeux
        titreValeursTrois
        titreValeursUn
        texteIntroductionValeurs
        imageValeursDeux {
          gatsbyImageData
          alt
        }
        imageValeursTrois {
          gatsbyImageData
          alt
        }
        imageValeursUn {
          alt
          gatsbyImageData
        }
      }
    }
  `)
  return <article className="w-12/12 py-10  flex">
  <section className="m-auto w-10/12">
    <h2 className=" text-3xl mb-10">{data.datoCmsHomepage.titreValeurs}</h2>
    <p>
     { data.datoCmsHomepage.texteIntroductionValeurs}
    </p>
    <div className=" my-20 flex flex-col gap-y-10 md:grid grid-cols-3 gap-x-10 w-10/12 m-auto">
    <div className="flex flex-col items-center">
        <figure className="m-auto ">
        <GatsbyImage image={data.datoCmsHomepage.imageValeursUn.gatsbyImageData} alt={data.datoCmsHomepage.imageValeursUn.alt} />
        </figure>
        <h3 className="text-center text-2xl">{data.datoCmsHomepage.titreValeursUn}</h3>
      </div>
      <div className="flex flex-col items-center">
        <figure className="m-auto ">
        <GatsbyImage image={data.datoCmsHomepage.imageValeursDeux.gatsbyImageData} alt={data.datoCmsHomepage.imageValeursDeux.alt} />
        
        </figure>
        <h3 className="text-center text-2xl">{data.datoCmsHomepage.titreValeursDeux}</h3>
      </div>
      <div className="flex flex-col items-center">
        <figure className="m-auto ">
        <GatsbyImage image={data.datoCmsHomepage.imageValeursTrois.gatsbyImageData} alt={data.datoCmsHomepage.imageValeursTrois.alt} />

        </figure>
        <h3 className="text-center text-2xl">{data.datoCmsHomepage.titreValeursTrois}</h3>
      </div>
    </div>
  </section>
</article>
}

export default SectionTwo





