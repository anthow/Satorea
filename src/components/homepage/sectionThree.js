import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function SectionThree() {
  return (
    <article className="w-12/12 py-0 pb-10 md:pb-0 md:py-10 md:my-10 flex">
      <section className="m-auto w-10/12">
        <h2 className=" text-3xl mb-10">title 2</h2>
        <p className="mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          est placerat in egestas erat imperdiet sed euismod.{" "}
        </p>
        <div className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
          <figure className="m-auto ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1647077632/satoera/fake%20image/pexels-monstera-6238186_wk3vn2.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
          <div>
            <h3 className="text-2xl font-black mb-5">Alt title 3</h3>
            <h4 className="italic text-xl mb-10">subtitle 4</h4>
            <p className="mb-10 md:w-10/12">
              orta nibh venenatis cras sed felis eget velit aliquet. Suspendisse
              in est ante in. Sed vulputate odio ut enim blandit volutpat
              maecenas volutpat.
            </p>
            <Link to="/">
              <button className="py-4 px-6 text-white font-black bg-secondary-color hover:bg-fourth-color rounded-sm">
                Button Md
              </button>
              <p className="mt-5 flex items-center gap-x-2">
                <FontAwesomeIcon
                  className=" text-gray-600 text-lg"
                  icon={faCalendar}
                  size="1x"
                />
                <span> 1/06/2022</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:grid grid-cols-2 gap-x-4">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-black mb-5">Alt title 3</h3>
            <h4 className="italic text-xl mb-10">subtitle 4</h4>
            <p className="mb-10 md:w-10/12">
              orta nibh venenatis cras sed felis eget velit aliquet. Suspendisse
              in est ante in. Sed vulputate odio ut enim blandit volutpat
              maecenas volutpat.
            </p>
            <Link to="/">
              <button className="py-4 px-6 text-white font-black bg-secondary-color hover:bg-fourth-color rounded-sm">
                Button Md
              </button>
              <p className="mt-5 flex items-center gap-x-2">
                <FontAwesomeIcon
                  className=" text-gray-600 text-lg"
                  icon={faCalendar}
                  size="1x"
                />
                <span> 1/06/2022</span>
              </p>
            </Link>
          </div>
          <figure className="m-auto order-1 md:order-2 ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1647079414/satoera/fake%20image/pexels-mikael-blomkvist-6476783_nxwivi.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
        </div>
      </section>
    </article>
  );
}
