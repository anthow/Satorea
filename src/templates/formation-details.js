import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Individuel from "../components/footer/individuel";

const Formationdetail = ({ data }) => {
  return (
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
          <li className="font-black self-center text-lg m-auto">Catégorie</li>
          <li className="font-black text-lg m-auto ">Durée</li>
          <li className="font-black text-lg m-auto">Niveau</li>
          <li className="font-black text-lg m-auto" >Prix</li>
          <li className="text-sm text-center m-auto">{data.datoCmsFormationCollective.categories}</li>
          <li className="text-sm m-auto">{data.datoCmsFormationCollective.duree}</li>
          <li className="text-sm m-auto">{data.datoCmsFormationCollective.niveau}</li>
          <li className="text-sm m-auto">{data.datoCmsFormationCollective.prix}</li>
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
          className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsFormationCollective.objectifs,
          }}
        />
        <article className="py-10 flex flex-col  gap-y-20 m-auto  ">
          <section className="flex flex-col gap-y-5">
            <h3 className="text-2xl font-semibold">{data.datoCmsFormationCollective.titrePrograme}</h3>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationCollective.introductionProgramme,
              }}
            />
          </section>
          <section className="my-20 flex flex-col gap-y-10 md:grid grid-cols-3 gap-x-10 w-12/12 m-auto">
            <div className="flex flex-col items-center gap-y-5  ">
            <figure className="m-auto ">
              <GatsbyImage
                image={
                  data.datoCmsFormationCollective.imagePartieUn.gatsbyImageData
                }
                alt={data.datoCmsFormationCollective.imagePartieUn.alt}
              /> </figure>
              <div className="flex flex-col gap-y-5   items-center">
                <h3 className="text-center text-2xl font-semibold">{data.datoCmsFormationCollective.titrePartieUn}</h3>
                <h4>{data.datoCmsFormationCollective.sousTitrePartieUn}</h4>
              </div>
              <div
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsFormationCollective.textePartieUn,
                }}
              />
            </div>
            <div className="flex flex-col gap-y-5   items-center">
            <figure className="m-auto ">
              <GatsbyImage
                image={
                  data.datoCmsFormationCollective.imagePartieDeux
                    .gatsbyImageData
                }
                alt={data.datoCmsFormationCollective.imagePartieDeux.alt}
              /> </figure>
              <div className="flex flex-col gap-y-5   items-center">
                <h3 className="text-center text-2xl font-semibold">{data.datoCmsFormationCollective.titrePartieDeux}</h3>
                <h4>{data.datoCmsFormationCollective.sousTitrePartieDeux}</h4>
              </div>
              <div
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsFormationCollective.textePartieDeux,
                }}
              />
            </div>
            <div className="flex flex-col gap-y-5   items-center">
            <figure className="m-auto ">

              <GatsbyImage
                image={
                  data.datoCmsFormationCollective.imagePartieTrois
                    .gatsbyImageData
                }
                alt={data.datoCmsFormationCollective.imagePartieTrois.alt}
              /></figure>
              <div className="flex flex-col gap-y-5   items-center">
                <h3 className="text-center text-2xl font-semibold">{data.datoCmsFormationCollective.titrePartieTrois}</h3>
                <h4>{data.datoCmsFormationCollective.sousTitrePartieTrois}</h4>
              </div>
              <div
                className="text-center"
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
        <section className="   m-auto justify-between flex gap-x-10">
        {data.datoCmsFormationCollective.imagesOutils.map(pic => 
<figure className="md:w-12/12 w-1/2 m-auto mb-8 md:m-0 self-center ">
<a href={pic.customData.url} target="_blank" rel="noreferrer">

<GatsbyImage image={pic.gatsbyImageData} className="  "  />
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
          <Link to="/">
        <button className="p-2 px-5 text-lg rounded-full text-white font-black bg-secondary-color hover:bg-fourth-color rounded-full">
              {data.datoCmsFormationCollective.texteBouton}
            </button>
          </Link>
        </section>
      </article>
      </div>
      <Individuel />
    </Layout>
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
      imageFormation {
        alt
        gatsbyImageData(height: 800, width: 3000)
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
