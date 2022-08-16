import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Feedformation = () => (
  <StaticQuery
    query={graphql`
      {
        allDatoCmsFormationCollective(filter: {horsLigneEnLigne: {eq: true}}) {
        edges {
          node {
            imageFormation {
              alt
              gatsbyImageData
            }
            titreFormation
            texteFormation
            sousTitreFormation
            slug
          }
          }
        }
      }
    `}
    render={data => 
<>
<article className=" gap-y-10 py-10 flex flex-col m-auto b w-10/12  ">
{data.allDatoCmsFormationCollective.edges.map(({ node },i) => (
                i % 2 ?
<>
<section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
    <figure className="m-auto ">

      <GatsbyImage image={node.imageFormation.gatsbyImageData}
      alt={node.imageFormation.alt}
      />
    </figure>
    <div>
      <h3 className="text-2xl font-black mb-5">{node.sousTitreFormation}</h3>
      <h4 className=" text-xl mb-10">{node.titreFormation}</h4>
   <div
          className="mb-10 md:w-10/12"
          dangerouslySetInnerHTML={{
            __html: node.texteFormation,
          }}
        />
      <Link to={node.slug}>
        <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
          En savoir plus
        </button>
      </Link>
    </div>
  </section>


 
  </>
  :

  <section className="flex flex-col items-center md:grid grid-cols-2 gap-x-4">
  <div className="order-2 md:order-1">
    <h3 className="text-2xl font-black mb-5">{node.sousTitreFormation}</h3>
    <h4 className="text-xl mb-10">{node.titreFormation}</h4>
    <div
          className="mb-10 md:w-10/12"
          dangerouslySetInnerHTML={{
            __html: node.texteFormation,
          }}
        />
      <Link to={node.slug}>
      <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
        En savoir plus
      </button>
   
    </Link>
  </div>
  

  <figure className="m-auto order-1 md:order-2 ">
       <GatsbyImage image={node.imageFormation.gatsbyImageData}
      alt={node.imageFormation.alt}

      />

</figure>

</section>
 
          ))}
</article>



</>
}
  ></StaticQuery>
)

export default Feedformation

