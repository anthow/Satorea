import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Individuel = () => {
 
  return (
    <>
      <article className="  py-10 flex flex-col m-auto  gap-y-20 w-10/12  ">
        <section>
        <h2 className=" text-2xl mb-10  font-black ">
        Tu préfères un accompagnement sur-mesure?        </h2>
        <p>
        En séance individuelle, je t’accompagne pour atteindre des objectifs spécifiques. Un suivi personnalisé pour progresser rapidement avec des solutions numériques adaptées.

        </p>
        </section>
        <Link to="../../coaching">
        <button className="text-secondary-color   underline   ">
        Vers le Coaching individuel
                </button>
      </Link>
      </article>
    </>
  );
};
  
export default Individuel;
