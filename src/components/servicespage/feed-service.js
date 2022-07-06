import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Feedservice = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsAutresService {
        edges {
          node {
            nomDuService
            texteSectionUnPageService
            imageSectionUnPageServices {
              gatsbyImageData
              alt
            }
            titreSectionDeuxPageService
            texteSectionDeuxPageService
            imageSectionDeuxPageServices {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <article className="  py-20 mt-10 flex flex-col m-auto w-10/12 ">
        {data.allDatoCmsAutresService.edges.map(({ node }, i) => (
          <>
            <h3 className="text-2xl font-black mb-5">{node.nomDuService}</h3>

            <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-20">
              <figure className=" order-1  md:order-2  ">
                <GatsbyImage
                  image={node.imageSectionUnPageServices.gatsbyImageData}
                  alt={node.imageSectionUnPageServices.alt}
                  className="w-full"
                />
              </figure>
              <div className="order-2 md:order-1 ">
                <div
                  className="mb-10 md:w-10/12"
                  dangerouslySetInnerHTML={{
                    __html: node.texteSectionUnPageService,
                  }}
                />
              </div>
            </section>

            <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-20">
              <figure className=" order-1 ">
                <GatsbyImage
                  image={node.imageSectionDeuxPageServices.gatsbyImageData}
                  alt={node.imageSectionDeuxPageServices.alt}
                  className="w-full"
                />
              </figure>
              <div className="flex flex-col order-2 ">
                <h2 className="text-2xl font-black mb-5">
                  {node.titreSectionDeuxPageService}
                </h2>
                <div
                  className="mb-10 md:w-10/12"
                  dangerouslySetInnerHTML={{
                    __html: node.texteSectionDeuxPageService,
                  }}
                />
                <Link to="#">
                  <button className="p-2  rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
                    Contact{" "}
                  </button>
                </Link>
              </div>
            </section>
          </>
        ))}{" "}
      </article>
    </>
  );
};

export default Feedservice;
