import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SectionZero() {
  return (
  <article className="flex flex-col md:flex-row gap-y-10 pt-10  md:justify-center gap-x-20">
            <figure className="mx-auto ">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1647082451/satoera/fake%20image/pexels-mateus-souza-3586798_knsqkt.jpg"
                quality={95}
                width={200}
                height={200}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 rounded-full"
              />
            </figure>
             <figure className=" mx-auto">
             <StaticImage
               src="https://res.cloudinary.com/liono/image/upload/v1647077632/satoera/fake%20image/pexels-monstera-6238186_wk3vn2.jpg"
               quality={95}
               width={200}
               height={200}
               formats={["auto", "webp", "avif"]}
               alt="A Gatsby astronaut"
               className="mb-5 rounded-full"
             />
           </figure>
            <figure className="mx-auto ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1647079414/satoera/fake%20image/pexels-mikael-blomkvist-6476783_nxwivi.jpg"
              quality={95}
              width={200}
              height={200}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
            />
          </figure>
          </article>
  );
}
