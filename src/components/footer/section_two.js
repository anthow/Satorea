import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Sectiontwo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsFooter {
        titreDeuxiemeSection
        texteDeuxiemeSection
      }
    }
  `)
  return (
    <article className="flex flex-col gap-y-5">
      <h4 className="text-xl text-white ">{data.datoCmsFooter.titreDeuxiemeSection}</h4>
  
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: data.datoCmsFooter.texteDeuxiemeSection,
        }}
      />
      <section className="">
        <ul className="flex gap-x-10 text-xl ">
          <li>
            <a href="https://www.facebook.com/satorearea" target="_blank">
              {" "}
              <FontAwesomeIcon
                className="text-white hover:text-secondary-color text-lg"
                icon={faFacebook}
                size="1x"
              />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/satorearea/" target="_blank">
              {" "}
              <FontAwesomeIcon
                className="text-white hover:text-secondary-color text-lg"
                icon={faInstagram}
                size="1x"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/david-hainaut-003334107/"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon
                className="text-white hover:text-secondary-color text-lg"
                icon={faLinkedin}
                size="1x"
              />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Sectiontwo;

