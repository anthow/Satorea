import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Header = () => {
  const data = useStaticQuery(graphql`
  {
  datoCmsPageService {
    titreHeader
    texteHeader
    sousTitreHeader
    imageHeader {
      alt
      gatsbyImageData
    }
  }
}


  `);
  return (<>
  <article className=" lg:min-h-screen py-10 md:py-0 lg:min-h-9/10 flex flex-col m-auto">
   
   <section className=" m-auto flex flex-col gap-x-20 md:grid grid-cols-2">
   <figure className="m-auto ">
       
     <GatsbyImage image={data.datoCmsPageService.imageHeader.gatsbyImageData}
     alt= {data.datoCmsPageService.imageHeader.alt} />
   </figure>
     <div className=" py-4 w-10/12 lg:w-12/12 m-auto lg:mt-20 lg:pr-20">
     <div
              className="text-3xl lg:text-4xl font-black mb-2 md:mb-5"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.titreHeader,
              }}
            />
     <h1 className="text-2xl mb-5 md:mb-10"> {data.datoCmsPageService.sousTitreHeader}</h1>
     <div
              className=""
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageService.texteHeader,
              }}
            />
     </div>
  
   </section>
 </article>
         </>
  );
};

export default Header;
