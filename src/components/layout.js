import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer"
export default function Layout({ children }) {
  return (
    <div className="flex text-primary-color  flex-col ">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
