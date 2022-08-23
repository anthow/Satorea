import React from "react";
import { Link } from "gatsby";
export default function Nav() {
  return (
    <header className=" p-10 flex flex-col md:flex-row justify-between">
      <ul className="flex flex-col gap-x-4 m-auto md:flex-row">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <li>
          <div className="dropdown inline-block md:relative">
            <button className="  rounded flex md:inline-flex items-center">
              <Link to="/services">
                <p>Services</p>
              </Link>
              <svg
                className="ml-2 fill-current h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu md:absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-">
            <Link to="/coaching">
              <li className="md:w-max">Accompagnement individuel</li>
              </Link>
              <Link to="/formations">
              <li className="md:w-max"> Formation collective</li>
              </Link>
            </ul>
          </div>
        </li>
        <li> <a target="_blank" rel="noopener noreferrer" href="mailto:david@satorea.com"> 
        Contact </a></li>

      </ul>
    </header>
  );
}
