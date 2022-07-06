import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SectionZero = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsFooterBadge {
        edges {
          node {
            imageBadge {
              alt
              gatsbyImageData(height: 120)

            }
            urlBadge
          }
        }
      }
    }
  `)
  return<>   <article className="flex flex-col md:flex-row gap-y-10 pt-10 pb-5 items-center  md:justify-center md:gap-x-20">

{   
    
    data.allDatoCmsFooterBadge.edges.map(({ node }) => {
return(
  <GatsbyImage image={node.imageBadge.gatsbyImageData} alt={node.imageBadge.alt}       className="mb-5 w-max"
  ></GatsbyImage>
)})}

</article>
</>

}

export default SectionZero






