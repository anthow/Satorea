import React from "react";
import Navbar from "./navbar/navbar";

//import { useStaticQuery, graphql } from "gatsby";

const Header = () => {

  return (
    <header className="w-full py-4 sticky top-0 z-50 bg-white     m-auto">
<Navbar />
    </header>

  );
};

export default Header;
