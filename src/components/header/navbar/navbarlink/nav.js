import React from "react";
import { Link } from "gatsby";
export default function Nav() {
  return (
    <header className=" p-5 flex flex-col md:flex-row  justify-between">
      <ul className="flex flex-col gap-x-4 m-auto items-baseline md:flex-row">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <li>
          <div className="dropdown  inline-block md:relative">
            <li className="  rounded flex md:inline-flex ">
              <Link to="/services">
                <p>Services</p>
              </Link>
              <svg
                className="lg:ml-2 mt-1 fill-current h-3 lg:h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </li>
            <ul className="dropdown-menu md:absolute bg-white p-5 hidden space-y-4  text-gray-700 ">
            <Link to="/coaching">
              <li className="md:w-max">Accompagnement individuel</li>
              </Link>
              <Link to="/formations">
              <li className="md:w-max"> Formation collective</li>
              </Link>
            </ul>
          </div>
        </li>
        <li className="-mt-5 lg:mt-0"> <a target="_blank" rel="noreferrer" href="mailto:david@satorea.com"> 
        Contact </a></li>

      </ul>
    </header>
  );
}
