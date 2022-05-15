import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Header = () => {
  const data = useStaticQuery(graphql`
    {
  datoCmsPageAccompagnementIndividuel {
    titreDePage
    sousTitreHeader
    paragrapheHeader
    titreAccompagnement
    texteAccompagnement  
    imageHeader {
        gatsbyImageData(height: 800, width: 3000)
      alt
    }
  }
}

  `);
  return (<>
  <article className="  py-10 flex flex-col m-auto b w-12/12  ">
        <figure className="m-auto mb-5 ">
          <GatsbyImage image={data.datoCmsPageAccompagnementIndividuel.imageHeader.gatsbyImageData} 
          alt={data.datoCmsPageAccompagnementIndividuel.imageHeader.alt} 
          />
        </figure>
        <div className=" w-10/12 lg:w-8/12 m-auto flex flex-col">
        <section className=" pt-10  flex flex-col mb-10 ">
          <h2 className=" text-2xl font-black">{data.datoCmsPageAccompagnementIndividuel.titreDePage}</h2>
          <h1 className="text-2xl">{data.datoCmsPageAccompagnementIndividuel.sousTitreHeader}</h1>
        </section>
        <div
                className=""
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .paragrapheHeader,
                }}
              />
              </div>
      </article>
      <article className=" w-10/12 lg:w-8/12  py-10 md:py-0 flex flex-col m-auto   ">
        <h2 className=" text-2xl font-black mb-10">{data.datoCmsPageAccompagnementIndividuel.titreAccompagnement}</h2>
        <div
                className=""
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageAccompagnementIndividuel
                      .texteAccompagnement,
                }}
              />  
              
                    </article>
        </>
  );
};

export default Header;
