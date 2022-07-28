import React, { useState, useEffect } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Select from "./Select";
import { useGlobalContext } from "../../context";

import "./filter.css";

const Filter = ({ sale }) => {
  const { displayFilter, showfilter, setPurpose, FetchAllFiltered } =
    useGlobalContext();

  useEffect(() => {
    sale ? setPurpose("for-sale") : setPurpose("for-rent");
  }, []);

  return (
    <section className="pt-1 bg-gray-200 shadow-inner  filter">
      <div
        className="flex flex-row space-x-1 justify-center items-center py-3"
        onClick={displayFilter}
      >
        <h3 className=" text-base sm:text-xl font-bold cursor-pointer">
          Search by Filter
        </h3>{" "}
        {showfilter ? (
          <AiOutlineArrowUp className="text-xl font-black text-orange-400 cursor-pointer" />
        ) : (
          <AiOutlineArrowDown className="text-xl font-black text-orange-400 cursor-pointer" />
        )}
      </div>

      <div className="border container">
        <div
          className={`${
            showfilter
              ? " text-center mt-3 py-2  show flex flex-row flex-wrap space-x-0 sm:space-x-4 justify-around"
              : " text-center mt-3 py-2  hide flex flex-row flex-wrap space-x-0 sm:space-x-4 justify-around"
          }`}
        >
          <Select />
        </div>

        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-gray-50 text-gray-800 px-7 py-2 font-bold uppercase border-2 border-gray-800 text-sm rounded-xl"
            onClick={FetchAllFiltered}
          >
            Filter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
