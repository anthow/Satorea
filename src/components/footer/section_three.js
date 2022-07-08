import { Link } from "gatsby";
import React from "react";

const Sectionthree = () => {
  return (
    <article className=" flex   flex-col gap-y-5 justify-self-center">
      <h4 className="text-xl text-white">Alt title 4</h4>
      <ul>
        <Link to="/">
        <li>Accueil</li>
        </Link>
        <Link to="../../formations">
        <li>Ateliers collectifs</li>
        </Link>
        <Link to="../../coaching">

        <li>Besoin d'un suivi ?</li>
        </Link>
      </ul>
    </article>
  );
};

export default Sectionthree;
