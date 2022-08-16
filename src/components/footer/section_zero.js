import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
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
  <a href={node.urlBadge} target="_blank">
  <GatsbyImage image={node.imageBadge.gatsbyImageData} alt={node.imageBadge.alt}       className="mb-5 w-max"
  ></GatsbyImage>
  </a>
)})}

</article>
</>

}

export default SectionZero






