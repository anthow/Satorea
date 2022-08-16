import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"

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
  return  <article className=" w-12/12 mb-10  flex flex-col m-auto  ">
   
  <section className=" w-full m-auto  items-center flex flex-col md:grid grid-cols-2">
    <div className="order-2 m-auto md:m-0 w-10/12 lg:w-8/12 self-start justify-self-center md:pt-20    md:order-1">
    <div className="lg:text-6xl text-4xl mt-10 lg:mt-0   md:w-12/12 titrehomepage mb-2 flex flex-col items-center  break-normal"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.titre
          }}
        />
        <StaticImage src="https://res.cloudinary.com/liono/image/upload/v1651743197/satoera/Rectangle_18_tjpgie.png"
        className="relative bottom-24  left-2/3 lg:left-96  " />
  
    <h1 className="text-4xl mb-5 md:mb-10"> {data.datoCmsHomepage.sousTitreHeader}</h1>
    <div
    className="lg:w-9/12"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHomepage.texteHeader
          }}
        />
    </div>
  <figure className=" md:justify-self-end   h-fit  order-1 md:order-2">
  <GatsbyImage
  className=""
  image={data.datoCmsHomepage.imageHeader.gatsbyImageData} alt={data.datoCmsHomepage.imageHeader.alt} />
  </figure>
  </section>
</article>
}

export default Home





    