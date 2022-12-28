import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Sectiontwo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsFooter {
        titreDeuxiemeSection
        texteDeuxiemeSection
      }
    }
  `);
  return (
    <article className="flex flex-col gap-y-5">
      <h4 className="text-xl text-white ">
        {data.datoCmsFooter.titreDeuxiemeSection}
      </h4>

      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: data.datoCmsFooter.texteDeuxiemeSection,
        }}
      />
      <section className="">
        <ul className="flex gap-x-10 text-xl ">
          <li>
            <a href="https://www.facebook.com/satorearea" target="_blank" rel="noreferrer">
              {" "}
              <svg
                width="21"
                height="21"
                className="text-white hover:text-secondary-color text-lg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/satorearea/" target="_blank" rel="noreferrer">
              {" "}
              <svg
                width="21"
                height="21"
                className="text-white hover:text-secondary-color text-lg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/david-hainaut-003334107/"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <svg
                width="21"
                height="21"
                className="text-white hover:text-secondary-color text-lg"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M96 120v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0Zm28 68a12 12 0 0 0 12-12v-28a16 16 0 0 1 32 0v28a12 12 0 0 0 24 0v-28a40 40 0 0 0-58.6-35.4A12 12 0 0 0 112 120v56a12 12 0 0 0 12 12ZM232 44v168a20.1 20.1 0 0 1-20 20H44a20.1 20.1 0 0 1-20-20V44a20.1 20.1 0 0 1 20-20h168a20.1 20.1 0 0 1 20 20Zm-24 4H48v160h160ZM84 96a16 16 0 1 0-16-16a16 16 0 0 0 16 16Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Sectiontwo;
