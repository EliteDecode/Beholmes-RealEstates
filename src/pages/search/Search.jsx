import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { BiSearchAlt } from "react-icons/bi";
import "./search.css";
import { useGlobalContext } from "../../context";
import Loading from "../../components/loader/Loading";
import svg from "../../assets/void2.svg";
import { GoVerified, GoUnverified } from "react-icons/go";
import { GiPersonInBed } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FiTrello } from "react-icons/fi";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import millify from "millify";

const Search = () => {
  const { setSearchTerm, searchEstateTerm, loading, searchedEstate } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = document.getElementById("input").value;
    setSearchTerm(term);
    searchEstateTerm();
  };

  return (
    <>
      <Navbar />
      <section className="search py-3">
        <div className="container">
          <div className="search-box mt-3">
            <form onSubmit={handleSubmit}>
              <div
                className="form-control input-group flex items-center justify-center"
                style={{ width: "100%" }}
              >
                <input
                  type="search"
                  id="input"
                  className="p-2 sm:p-1.5 inp border-2 border-gray-800 "
                  placeholder="e.g. Paris"
                  style={{ width: "70%" }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="bg-gray-800 p-3.5 text-orange-400 sm:p-3 "
                  type="submit"
                >
                  <BiSearchAlt className="font-bold text-lg" />
                </button>
              </div>
            </form>
          </div>

          {loading ? (
            <div className="load">
              <Loading />
            </div>
          ) : (
            <div>
              {searchedEstate.length === 0 && (
                <div className="text-center flex flex-col items-center justify-center py-8 mt-1">
                  <img src={svg} alt="Nothing Found" className="svg" />
                  <h1 className="text-sm font-bold sm:text-md capitalize opacity-80 mt-5">
                    Ooops!!! Nothing Found. <br /> Have you tried searching?
                  </h1>
                </div>
              )}
            </div>
          )}

          <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 mt-3 sm:mt-12 px-3 sm:px-10">
            {searchedEstate?.map((estate, id) => {
              return (
                <div className="col-md-3 rounded-lg bg-white shadow shadow-gray-500 cursor-pointer hover:shadow-none">
                  <div className="details">
                    <div className="flex flex-row justify-between px-3 items-center">
                      <div className="flex flex-row space-x-1 items-center p-3">
                        Type:{" "}
                        <h3 className="text-md font-bold px-2">
                          {estate?.type} ({estate?.name_l1})
                        </h3>
                      </div>
                    </div>

                    <div className="title px-3">
                      <p className="text-sm font-medium p-3">
                        {" "}
                        Description: {estate?.slug}
                      </p>
                      <p className="text-sm font-medium p-3">
                        {" "}
                        Tracking Id:{" "}
                        <span className="text-orange-700 font-bold">
                          {" "}
                          {estate?.trackID}
                        </span>
                      </p>
                      <p className="text-sm font-semibold p-3">
                        NB:{" "}
                        <span className="text-gray-700 opacity-80 text-sm font-base">
                          Contact an Agent with the Track ID for more
                          information about this building
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
