import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SectionFour() {
  return (
    <div className=" md:min-h-9/10 py-10 ">
      <article className="w-12/12  flex">
        <section className="m-auto w-10/12">
          <h2 className=" text-3xl mb-10">title 2</h2>
          <p className="mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </section>
      </article>
      <article className=" md:w-9/12 w-11/12  m-auto items-center justify-center">
        <div className="  flex flex-col md:grid grid-cols-2">
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647082451/satoera/fake%20image/pexels-mateus-souza-3586798_knsqkt.jpg"
                quality={95}
                width={120}
                height={120}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">Title 4</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet est placerat in egestas erat imperdiet sed euismod. Ut
                pharetra sit amet aliquam id diam maecenas.
              </p>
              <p className="text-xs italic"> Paragraph Xs</p>
            </div>
          </div>
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647082456/satoera/fake%20image/pexels-italo-melo-2379005_xv7fdb.jpg"
                quality={95}
                width={120}
                height={120}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">Title 4</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <p className="text-xs italic"> Paragraph Xs</p>
            </div>
          </div>
          <div className="flex  gap-x-10 mb-20">
            <figure className=" ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647082453/satoera/fake%20image/pexels-anastasia-shuraeva-5704720_bzqozf.jpg"
                quality={95}
                width={120}
                height={120}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="w-1/2">
              <h4 className="tex-lg mb-4 font-black">Title 4</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, placerat in egestas erat imperdiet
                sed euismod. Ut pharetra sit amet aliquam id diam maecenas.
              </p>
              <p className="text-xs italic"> Paragraph Xs</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-10 mb-20">
            <figure className="mx-auto md:m-0 ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647082453/satoera/fake%20image/pexels-simon-robben-614810_uvjkwe.jpg"
                quality={95}
                width={120}
                height={120}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 rounded-full"
              />
            </figure>
            <div className="md:w-1/2">
              <h4 className="tex-lg  text-center md:text-left mb-4 font-black">
                Title 4
              </h4>
              <p className="mb-2 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet est placerat in egestas erat imperdiet sed euismod. Ut
                pharetra sit amet aliquam id diam maecenas.
              </p>
              <p className="text-xs text-center md:text-left italic">
                {" "}
                Paragraph Xs
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
