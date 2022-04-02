import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const ServicesPage = () => {
  return (
    <Layout>
     <article className=" min-h-screen py-10 md:py-0 md:min-h-9/10 flex flex-col m-auto bg-gray-200 ">
   
   <section className="w-10/12 m-auto items-center flex flex-col gap-x-4 md:grid grid-cols-2">
   <figure className="m-auto ">
     <StaticImage
       src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
       quality={95}
       formats={["auto", "webp", "avif"]}
       alt="A Gatsby astronaut"
       className="mb-5"
     />
   </figure>
     <div className="">
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
  
   </section>
 </article>
 <article className=" min-h-screen py-10  md:min-h-9/10 flex flex-col m-auto w-10/12 ">
 <h3 className="text-2xl font-black mb-5">formatation collective</h3>

 <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
 <figure className=" order-1 md:order-2 ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1647077632/satoera/fake%20image/pexels-monstera-6238186_wk3vn2.jpg"
              quality={95}
              height="300"
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
          <div className="order-2 md:order-1">
            <p className="mb-10 md:w-10/12">
              orta nibh venenatis cras sed felis eget velit aliquet. Suspendisse
              in est ante in. Sed vulputate odio ut enim blandit volutpat
              maecenas volutpat.
            </p>
          </div>
          </section>

          <section className="flex flex-col mb-20 items-center md:grid grid-cols-2 gap-x-4">
 <figure className=" ">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1647077632/satoera/fake%20image/pexels-monstera-6238186_wk3vn2.jpg"
              quality={95}
              height="300"
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5"
            />
          </figure>
          <div className="flex flex-col">
          <h2 className="text-2xl font-black mb-5">sub title 2</h2>
            <p className="mb-10 md:w-10/12">
              orta nibh venenatis cras sed felis eget velit aliquet. Suspendisse
              in est ante in. Sed vulputate odio ut enim blandit volutpat
              maecenas volutpat.
            </p>
            <Link to="/">
              <button className="py-2 px-3 text-white font-black bg-secondary-color rounded-sm">
                Button Md
              </button>
    
            </Link>
          </div>
          </section>
          +++++++++++++++++
</article>
    </Layout>
  );
};

export default ServicesPage;
