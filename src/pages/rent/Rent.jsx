import React, { useEffect, useState } from "react";
import banner from "../../assets/paris.jpg";
import Loading from "../../components/loader/Loading";
import { useGlobalContext } from "../../context";
import "./rent.css";
import { GoVerified, GoUnverified } from "react-icons/go";
import { GiPersonInBed } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FiTrello } from "react-icons/fi";

import { Link } from "react-router-dom";
import millify from "millify";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";

import svg from "../../assets/void2.svg";

const Rent = ({ simplified }) => {
  const { estatesForRent, loading, displayFilter } = useGlobalContext();

  return (
    <>
      {!simplified && (
        <>
          {" "}
          <Navbar />
          <Filter />{" "}
        </>
      )}
      <section className=" py-5 md:py-20 bg-neutral-100">
        <div className="container">
          {simplified && (
            <div className="banner-section flex flex-row justify-center space-x-2">
              <div className="banner-cover shadow-2xl shadow-white"></div>
              <div className="banner-details  p-5 my-3">
                <h3 className="text-xs text-gray 200 font-bold uppercase opacity-60">
                  Rent a home
                </h3>
                <h1 className="capitalize text-2xl font-bold my-2 opacity-80">
                  Rental Homes For <br /> Everyone
                </h1>
                <p className="text-base text-gray 200 font-normal mt-2 opacity-60">
                  Explore Apartments, Villas , Homes and More
                </p>
                <Link to="/forrent">
                  <button
                    className="bg-gray-700 py-1.5 px-7 text-sm font-bold rounded  transition ease-in-out delay-150 text-orange-400 border-2 border-gray-700 shadow-2xl mt-2 
            hover:bg-gray-50 hover:text-gray-800 hover:border-orange-400 "
                    onClick={displayFilter}
                  >
                    Explore Renting
                  </button>
                </Link>
              </div>
            </div>
          )}

          {!simplified && (
            <div className="px-10">
              {" "}
              {estatesForRent.length !== 0 && (
                <h3 className="text-sm sm:text-lg text-gray 200 font-bold uppercase opacity-60">
                  Rental Homes For Everyone
                </h3>
              )}
            </div>
          )}

          {loading ? (
            <div className="load">
              <Loading />
            </div>
          ) : (
            <div>
              {estatesForRent.length === 0 && (
                <div className="text-center flex flex-col items-center justify-center py-8">
                  <img src={svg} alt="Nothing Found" className="svg" />
                  <h1 className="text-md font-base capitalize opacity-80 mt-5">
                    Ooops!!! Nothing Found. Try Filtering again.
                  </h1>
                </div>
              )}
            </div>
          )}

          <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 mt-3 sm:mt-12 px-6 sm:px-10">
            {estatesForRent?.map((estate, id) => {
              return (
                <Link to={`/estate/${estate.externalID}`}>
                  <div className="col-md-3 bg-white   rounded-lg shadow shadow-gray-500 cursor-pointer hover:shadow-none">
                    <img
                      src={estate?.coverPhoto?.url || banner}
                      alt="banner"
                      style={{ height: "200px", width: "100%" }}
                      className="rounded-lg object-fill"
                    />

                    <div className="details">
                      <div className="flex flex-row justify-between px-3 items-center">
                        <div className="flex flex-row space-x-4 items-center p-3">
                          {estate?.isVerified ? (
                            <GoVerified className="text-green-900" />
                          ) : (
                            <GoUnverified className="text-green-900" />
                          )}

                          <h3 className="text-sm font-bold">
                            AED {millify(estate?.price)}
                            {estate?.rentFrequency &&
                              `/${estate?.rentFrequency}`}
                          </h3>
                        </div>
                        <div
                          className="p-3 rounded-full"
                          style={{ width: "25%" }}
                        >
                          <img
                            src={estate?.agency?.logo?.url}
                            alt="agency"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center space-x-1 px-3  py-1 ">
                        <div className="px-3 flex flex-row space-x-2 border-right ">
                          <h3 className="text-sm font-bold text-orange-300">
                            {estate?.rooms}{" "}
                          </h3>
                          <GiPersonInBed className="text-orange-700" />
                        </div>
                        <div className="px-3 flex flex-row space-x-2 border-right ">
                          <h3 className="text-sm font-bold text-orange-300">
                            {estate?.baths}{" "}
                          </h3>
                          <FaBath className="text-orange-700" />
                        </div>
                        <div className="px-3 flex flex-row space-x-2  ">
                          <h3 className="text-sm font-bold text-orange-300">
                            {millify(estate?.area)} sqft
                          </h3>
                          <FiTrello className="text-orange-700" />
                        </div>
                      </div>
                      <div className="title px-3">
                        <p className="text-sm font-medium p-3">
                          {" "}
                          {estate?.title.length > 30
                            ? estate?.title.substring(0, 30) + "..."
                            : estate?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rent;
