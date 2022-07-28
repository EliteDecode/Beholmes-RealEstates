import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import { HiDocumentSearch } from "react-icons/hi";
import { MdHomeWork, MdHouse } from "react-icons/md";
import { SiHomeadvisor } from "react-icons/si";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./navbar.css";

const Navbar = () => {
  const { showMenu, displayMenu } = useGlobalContext();

  return (
    <section className="p-6 bg-slate-800">
      <div className="container  ">
        <div className="flex flex-row items-center justify-between ">
          <Link to="/">
            <div className="logo flex flex-row items-center space-x-1">
              <h6 className="font-medium text-2xl text-gray-50">BeHolmes</h6>
              <SiHomeadvisor className="font-medium text-2xl text-orange-400" />
            </div>
          </Link>
          <div>
            <AiOutlineMenuUnfold
              className="font-medium text-4xl text-orange-400 border-gray-50 border-2 cursor-pointer p-1  rounded"
              onClick={displayMenu}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className={`${
              showMenu
                ? "border-2 mt-3 border-orange-400 bg-slate-700 px-2 py-2 w-40 rounded-md flex absolute menu-show"
                : "menu-hide border-2 mt-3 border-orange-400 bg-slate-700 px-2 py-2 w-40 rounded-md flex absolute"
            }`}
          >
            <ul>
              <Link
                to="/"
                className="list-none flex flex-row items-center space-x-1 my-3 py-1 "
                onClick={displayMenu}
              >
                <MdHouse className="text-orange-400" />
                <h6 className="text-gray-100 text-sm">Home</h6>
              </Link>
              <Link
                to="/search"
                className="list-none flex flex-row items-center space-x-1 my-3 py-1 "
                onClick={displayMenu}
              >
                <HiDocumentSearch className="text-orange-400" />
                <h6 className="text-gray-100 text-sm">Search</h6>
              </Link>
              <Link
                to="/forrent"
                className="list-none flex flex-row items-center space-x-1 my-3 py-1 "
                onClick={displayMenu}
              >
                <MdHomeWork className="text-orange-400" />
                <h6 className="text-gray-100 text-sm"> Rent A House</h6>
              </Link>
              <Link
                to="/forsale"
                className="list-none flex flex-row items-center space-x-1 my-3 py-1 "
                onClick={displayMenu}
              >
                <BsHouseDoorFill className="text-orange-400" />
                <h6 className="text-gray-100 text-sm">Buy A House</h6>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
