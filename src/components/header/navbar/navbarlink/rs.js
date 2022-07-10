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


export default function Rs() {
  return (
    <ul className=" flex justify-center md:grid grid-cols-4 m-auto gap-2 ">

      <li>
        <a href="https://www.facebook.com/satorearea" target="_blank">
        {" "}
        <FontAwesomeIcon className=" text-black hover:text-secondary-color text-lg" icon={faFacebook} size="1x" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/satorearea/" target="_blank">
        {" "}
        <FontAwesomeIcon className=" text-black hover:text-secondary-color text-lg" icon={faInstagram} size="1x" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/david-hainaut-003334107/" target="_blank">
        {" "}
        <FontAwesomeIcon className=" text-black hover:text-secondary-color text-lg" icon={faLinkedin} size="1x" />
        </a>
      </li>
     
    </ul>
  );
}
