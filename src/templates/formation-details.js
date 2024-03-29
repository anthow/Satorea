import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Individuel from "../components/footer/individuel";
import Seo from "../components/seo";
const Formationdetail = ({ data }) => {
  const titre  = data.datoCmsFormationCollective.titreFormation
  const description = data.datoCmsFormationCollective.sousTitreFormation


  return (<>
        <Seo title= "Satorea"
description = {description}
/>
    <Layout>
      <div className="pb-10 flex flex-col m-auto  w-12/12">
        <figure className=" w-full h-1/3 m-auto mb-5 ">
          <GatsbyImage
            image={
              data.datoCmsFormationCollective.imageFormation.gatsbyImageData
            }
            className='w-full'
            alt={data.datoCmsFormationCollective.imageFormation.alt}
          />
        </figure>
        <article className="  py-10 flex flex-col m-auto b w-10/12  ">

          <section className=" pt-10  mb-10 gap-x-10">
            <h1 className=" text-4xl font-black mb-10">
              {data.datoCmsFormationCollective.sousTitreFormation}
            </h1>
            <h2 className="text-2xl">
              {data.datoCmsFormationCollective.titreFormation}
            </h2>
          </section>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationCollective.texteFormation,
            }}
          />{" "}
        </article>
        <article className="  py-10 flex flex-col m-auto b w-10/12  ">
          <h2 className=" text-2xl font-black">
            {data.datoCmsFormationCollective.titreInformationGenerale}
          </h2>

          <ul className=" my-10 flex w-12/12 m-auto flex-col  md:grid grid-cols-4 grid-row-2 gap-y-4 gap-x-4 ">
            <li className="font-black self-center text-lg m-auto order-1">Catégorie</li>
            <li className="font-black text-lg m-auto order-3 lg:order-2 ">Durée</li>
            <li className="font-black text-lg m-auto order-5 lg:order-3">Niveau</li>
            <li className="font-black text-lg m-auto order-7 lg:order-4" >Prix</li>
            <li className="text-sm text-center m-auto order-2 lg:order-5">{data.datoCmsFormationCollective.categories}</li>
            <li className="text-sm m-auto order-4 lg:order-6">{data.datoCmsFormationCollective.duree}</li>
            <li className="text-sm m-auto order-6 lg:order-7">{data.datoCmsFormationCollective.niveau}</li>
            <li className="text-sm m-auto order-8 ">{data.datoCmsFormationCollective.prix}</li>
          </ul>
          <section className=" flex flex-col md:grid grid-cols-2 gap-x-10 my-10">
            <div
              className="order-2 md:order-1"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsFormationCollective.paragrapheUnInformationGenerale,
              }}
            />
            <figure className="m-auto order-1 md:order-2 ">
              <GatsbyImage
                image={
                  data.datoCmsFormationCollective.imageInformationGNRale
                    .gatsbyImageData
                }
                alt={data.datoCmsFormationCollective.imageInformationGNRale.alt}
              />
            </figure>
          </section>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html:
                data.datoCmsFormationCollective.paragrapheDeuxInformationGenerale,
            }}
          />
        </article>
        <article className="py-10 flex flex-col w-10/12 gap-y-10 m-auto">
          <h3 className="text-2xl font-semibold">{data.datoCmsFormationCollective.titreObjectif}</h3>
          <div
            className="objectif"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationCollective.objectifs,
            }}
          />
                <article className="  mt-10   py-10 flex flex-col  m-auto">
            <h2 className=" text-2xl mb-10  font-semibold ">
              {data.datoCmsFormationCollective.titrePrograme}
            </h2>

            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsFormationCollective.introductionProgramme,
              }}
            />{" "}
            <section className="py-10 gap-y-10 flex flex-col md:grid grid-cols-3 lg:w-12/12 m-auto ">
              <div className=" py-5 px-10 flex flex-col  ">
                <figure className="  ">
                  <GatsbyImage
                    className="mb-5"
                    image={
                      data.datoCmsFormationCollective.imagePartieUn.gatsbyImageData

                    }
                    alt={data.datoCmsFormationCollective.imagePartieUn.alt} />
                </figure>

                <h3 className="text-xl font-semibold ">{data.datoCmsFormationCollective.titrePartieUn}</h3>

                <p className=" text-sm   font-regular mb-5">
                  {data.datoCmsFormationCollective.sousTitrePartieUn}
                </p>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsFormationCollective.textePartieUn,
                  }}
                />
              </div>
              <div className=" py-5 px-10 flex flex-col ">
                <figure className="  ">
                  <GatsbyImage
                    className="mb-5"
                    image={
                      data.datoCmsFormationCollective.imagePartieDeux
                        .gatsbyImageData
                    }
                    alt={data.datoCmsFormationCollective.imagePartieDeux.alt}
                  />
                </figure>
                <h3 className="text-xl font-semibold  ">
                  {data.datoCmsFormationCollective.titrePartieDeux}
                </h3>
                <p className=" text-sm   font-regular mb-5">
                  {data.datoCmsFormationCollective.sousTitrePartieDeux}</p>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsFormationCollective.textePartieDeux,
                  }}
                />
              </div>
              <div className=" py-5 px-10 flex flex-col ">
                <figure className="  ">
                  <GatsbyImage
                    className="mb-5"
                    image={
                      data.datoCmsFormationCollective.imagePartieTrois.gatsbyImageData
                    }
                    alt={data.datoCmsFormationCollective.imagePartieTrois.alt}

                  />
                </figure>
                <h3 className="text-xl font-semibold   ">
                  {data.datoCmsFormationCollective.titrePartieTrois}    </h3>
                <p className=" text-sm   font-regular mb-5">
                  {data.datoCmsFormationCollective.sousTitrePartieTrois}</p>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: data.datoCmsFormationCollective.textePartieTrois,
                  }}
                />
              </div>
            </section>
          </article>


        </article>

      <article className="py-10 mb-10 w-10/12 m-auto gap-y-10 flex flex-col">
        <h3 className="text-2xl font-semibold"> {data.datoCmsFormationCollective.titreOutils}</h3>
        <section className="   m-auto justify-between flex flex-col lg:flex-row  gap-x-10">
          {data.datoCmsFormationCollective.imagesOutils.map(pic =>
            <figure className="w-9/12 lg:w-12/12  m-auto mb-8 md:m-0 self-center ">
              <a href={pic.customData.url} target="_blank" rel="noreferrer">

                <GatsbyImage image={pic.gatsbyImageData} className="  " />
              </a>

            </figure>
          )}
        </section>
      </article>
      <article className="  py-10 flex flex-col md:grid grid-cols-3  m-auto b w-10/12  ">
        <section className="col-span-2">
          <h2 className=" mb-10 text-2xl gr font-semibold">
            {data.datoCmsFormationCollective.titreConclusion}
          </h2>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationCollective.texteConclusion,
            }}
          />
        </section>
        <section className="justify-self-center text-center">
          <h2 className=" mb-10 mt-10 md:mt-0 text-4xl gr font-black">{data.datoCmsFormationCollective.titreBouton}</h2>
          <Link to={data.datoCmsFormationCollective.urlBouton}>
            <button className="p-2 px-5 text-lg rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
              {data.datoCmsFormationCollective.texteBouton}
            </button>
          </Link>
        </section>
      </article>
    </div>
    <Individuel />
  </Layout>
    </>
  );
};

export const query = graphql`
  query FormationQuery($url: String) {
    datoCmsFormationCollective(slug: { eq: $url }) {
      id
      slug
      introductionProgramme
      niveau
      duree
      objectifs
      categories
      paragrapheDeuxInformationGenerale
      paragrapheUnInformationGenerale
      prix
      sousTitreFormation
      sousTitrePartieDeux
      sousTitrePartieTrois
      sousTitrePartieUn
      texteConclusion
      texteFormation
      textePartieDeux
      textePartieTrois
      textePartieUn
      texteBouton
      titreConclusion
      titreFormation
      titreInformationGenerale
      titreObjectif
      titreOutils
      titrePartieDeux
      titrePartieTrois
      titrePartieUn
      titrePrograme
      titreBouton
      urlBouton
      imageFormation {
        alt
        gatsbyImageData(height: 600, width: 3000)
      }
      imageInformationGNRale {
        alt
        gatsbyImageData
      }
      imagePartieDeux {
        alt
        gatsbyImageData
      }
      imagePartieTrois {
        alt
        gatsbyImageData
      }
      imagePartieUn {
        alt
        gatsbyImageData
      }
      imagesOutils {
        alt
        gatsbyImageData
        customData
      }
    }
  }
`;
export default Formationdetail;
