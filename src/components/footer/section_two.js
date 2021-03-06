import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sectiontwo = () => {
  return (
    <article className="flex flex-col gap-y-5">
      <h4 className="text-xl text-white ">Alt title 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

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
