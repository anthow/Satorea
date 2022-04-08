import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const CoachingPage = () => {
  return (
    <Layout>
      <article className="  py-10 flex flex-col m-auto b w-10/12  ">
        <figure className="m-auto ">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            height={1200}
            width={3000}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5"
          />
        </figure>
        <section className=" pt-10 flex mb-10 gap-x-10">
          <h2 className=" text-2xl font-black">Alt title 2</h2>
          <h1 className="text-2xl">Title 1</h1>
        </section>
        <p>paragraph Lg</p>
      </article>
      <article className="  py-10 flex flex-col m-auto b w-10/12  ">
        <h2 className=" text-2xl font-black">Alt title 2</h2>
        <ul className=" my-10 flex w-10/12 m-auto flex-col md:grid grid-cols-4 grid-row-2 gap-y-4 ">
          <li>Catégorie</li>
          <li>Caption Sm</li>
          <li>Caption Sm</li>
          <li>Caption Sm</li>
          <li>Lorem ipsim dolor sit amet</li>
          <li>Durée</li>
          <li>Niveau</li>
          <li>Prix</li>
        </ul>
        <section className=" flex flex-col md:grid grid-cols-2 gap-x-10 my-10">
          <p className="order-2 md:order-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ut
            pretium, fermentum rhoncus urna pellentesque. Elementum neque sed
            nunc volutpat. Enim urna quis ante id. Consequat amet odio sem amet
            feugiat sit netus ut.
          </p>
          <figure className="m-auto order-1 md:order-2 ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
        </section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ut
          pretium, fermentum rhoncus urna pellentesque. Elementum neque sed nunc
          volutpat. Enim urna quis ante id. Consequat amet odio sem amet feugiat
          sit netus ut.
        </p>
      </article>
      <article className="  py-10 flex flex-col md:grid grid-cols-3  m-auto b w-10/12  ">
        <section className="col-span-2">
          <h2 className=" mb-10 text-2xl gr font-black">Alt title 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ut
            pretium, fermentum rhoncus urna pellentesque. Elementum neque sed
            nunc volutpat. Enim urna quis ante id. Consequat amet odio sem amet
            feugiat sit netus ut.
          </p>
        </section>
        <section className="justify-self-center text-center">
          <h2 className=" mb-10 text-2xl gr font-black">Alt title 2</h2>
          <Link to="/">
            <button className="py-4 px-6 text-white font-black bg-secondary-color rounded-sm">
              Button Md
            </button>
          </Link>
        </section>
      </article>
      <article className="  py-10 flex flex-col gap-y-5 m-auto b w-10/12  ">
        <h2 className="  text-2xl  font-black">Alt title 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <Link to="/">link md</Link>
      </article>
      <article className="  py-10 flex flex-col gap-y-5 m-auto b w-10/12  ">
        <h2 className="  text-2xl gr font-black">Alt title 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </article>
      <article className=" m-auto w-10/12 flex flex-col md:grid grid-cols-2 gap-x-10 my-10">
          <section>
          <h3 className="mb-5  text-xl  font-black">Alt title 3</h3>
          <h4 className=" mb-10 text-lg  font-black">Subtile 4</h4>
            <p className="mb-10"> paragraph md</p>
            <button className="py-4 px-6 text-white font-black bg-secondary-color rounded-sm">
              Button Md
            </button>
          </section>
          <figure className="m-auto order-1 md:order-2 ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
      </article>
    </Layout>
  );
};

export default CoachingPage;
