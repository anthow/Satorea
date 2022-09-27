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
        gatsbyImageData(height: 600, width: 3000)
      alt
    }
  }
}

  `);
  return (<>
    <article className="  pb-10 flex flex-col m-auto  w-12/12  ">
      <figure className="m-auto mb-5 ">
        <GatsbyImage image={data.datoCmsPageAccompagnementIndividuel.imageHeader.gatsbyImageData}
          alt={data.datoCmsPageAccompagnementIndividuel.imageHeader.alt}
        />
      </figure>
      <div className=" w-10/12  m-auto flex flex-col">
        <section className=" pt-10  flex flex-col mb-10 ">
          <h1 className=" text-4xl font-black mb-10">{data.datoCmsPageAccompagnementIndividuel.titreDePage}</h1>
          <h2 className="text-2xl">{data.datoCmsPageAccompagnementIndividuel.sousTitreHeader}</h2>
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
    <article className=" w-10/12  mt-10 py-10 md:py-0 flex flex-col m-auto   ">
      <h2 className=" text-2xl font-semibold mb-10">{data.datoCmsPageAccompagnementIndividuel.titreAccompagnement}</h2>
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
