import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Rs() {
  return (
    <ul className="grid grid-cols-4 m-auto gap-2 ">
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faEnvelope} size="1x" />
      </li>
      <li>
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faFacebook} size="1x" />
      </li>
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faInstagram} size="1x" />
      </li>
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faYoutube} size="1x" />
      </li>
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faTwitter} size="1x" />
      </li>
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faLinkedin} size="1x" />
      </li>
      <li>
        {" "}
        <FontAwesomeIcon className="hover:text-red-600 text-lg" icon={faWhatsapp} size="1x" />
      </li>
    </ul>
  );
}