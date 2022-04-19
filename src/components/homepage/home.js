import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsHomepage {
        titre
        sousTitreHeader
        imageHeader {
          gatsbyImageData
          alt
        }
        texteHeader
      }
    }
  `)
  return  <article className=" min-h-screen py-10 md:py-0 md:min-h-9/10 flex flex-col m-auto  ">
   
  <section className="w-10/12 m-auto items-center flex flex-col gap-x-4 md:grid grid-cols-2">
    <div className="order-2  md:order-1">
    <div className="text-6xl  md:w-8/12 font-black mb-2 flex flex-col items-center md:mb-5 break-normal"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.titre
          }}
        />
    <h1 className="text-4xl mb-5 md:mb-10"> {data.datoCmsHomepage.sousTitreHeader}</h1>
    <div
    className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.texteHeader
          }}
        />
    </div>
  <figure className="m-auto order-1 md:order-2">
  <GatsbyImage image={data.datoCmsHomepage.imageHeader.gatsbyImageData} alt={data.datoCmsHomepage.imageHeader.alt} />
  </figure>
  </section>
</article>
}

export default Home





    