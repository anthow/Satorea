import React from "react";
import Sectionone from "./section_one";
import Sectiontwo from "./section_two";
import Sectionthree from "./section_three";
const Footer = () => {

  return (
    <footer className="block w-12/12   bg-gray-200 ">
<article className=" w-10/12 md:m-auto py-20 px-3 md:px-0 gap-y-10 flex items-top flex-col md:grid grid-cols-4">
<Sectionone />
<Sectiontwo />
<Sectionthree />
</article>
<p className="w-10/12 m-auto">@satoera</p>
    </footer>

  );
};

export default Footer;
