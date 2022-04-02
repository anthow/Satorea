import React from "react";
import { StaticImage } from "gatsby-plugin-image";


export default function Home() {
  return (
    <article className=" min-h-screen py-10 md:py-0 md:min-h-9/10 flex flex-col m-auto  ">
   
    <section className="w-10/12 m-auto items-center flex flex-col gap-x-4 md:grid grid-cols-2">
      <div className="order-2 md:order-1">
      <h2 className="text-3xl font-black mb-2 md:mb-5">Alt Title 2</h2>
      <h1 className="text-xl mb-5 md:mb-10"> Alt title 1</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      </div>
    <figure className="m-auto order-1 md:order-2">
      <StaticImage
        src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        className="mb-5"
      />
    </figure>
    </section>
  </article>
  );
}
    