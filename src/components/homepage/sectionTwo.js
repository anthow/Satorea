import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SectionTwo() {
  return (
    <article className="w-12/12 py-10  flex">
      <hr className="w-1/12 mt-5 divide-gray-300"></hr>
      <section className="ml-2 w-10/12">
        <h2 className=" text-3xl mb-10">title 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          est placerat in egestas erat imperdiet sed euismod. Ut pharetra sit
          amet aliquam id diam maecenas. Tincidunt id aliquet risus feugiat in
          ante. Risus sed vulputate odio ut. At lectus urna duis convallis
          convallis tellus id interdum. Tempus quam pellentesque nec nam aliquam
          sem. Scelerisque eu ultrices vitae auctor eu augue ut.{" "}
        </p>
        <div className=" my-20 flex flex-col gap-y-10 md:grid grid-cols-3 gap-x-10 w-10/12 m-auto">
          <div>
            <figure className="m-auto ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647084795/satoera/fake%20image/pexels-flo-dahm-699459_bdiiuh.jpg"
                quality={95}
                height={383}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5"
              />
            </figure>
            <h3 className="text-center text-2xl">Title 3</h3>
          </div>
          <div>
            <figure className="m-auto ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647084794/satoera/fake%20image/pexels-djordje-petrovic-2102416_gzjqje.jpg"
                quality={95}
                height={383}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5"
              />
            </figure>
            <h3 className="text-center text-2xl">Title 3</h3>
          </div>
          <div>
            <figure className="m-auto ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647084793/satoera/fake%20image/pexels-linkedin-sales-navigator-1251862_n5j5vh.jpg"
                quality={95}
                height={383}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5"
              />
            </figure>
            <h3 className="text-center text-2xl">Title 3</h3>
          </div>
        </div>
      </section>
    </article>
  );
}
