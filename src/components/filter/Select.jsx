import React from "react";
import { filterData } from "../../utils/Filterdata";
import { useGlobalContext } from "../../context";

const Select = () => {
  const {
    setRentFrequency,
    setBathsMin,
    setCategoryExternalID,
    setMaxPrice,
    setMinPrice,
    setRoomsMin,
    setFurnishingStatus,
  } = useGlobalContext();

  return (
    <>
      <div>
        <label className="text-xs opacity-70 font-semibold ">
          Rent Frequency
        </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-1 rounded mt-1 
        mb-4 bg-gray-800 text-gray-50 text-xs sm:text-normal font-semibold"
          onChange={(e) => setRentFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly" selected>
            Monthly
          </option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold ">
          Property Type
        </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50
         text-xs sm:text-normal font-semibold"
          onChange={(e) => setCategoryExternalID(e.target.value)}
        >
          <option value="4">Apartment</option>
          <option value="16">Townhouses</option>
          <option value="3">Villas</option>
          <option value="18">Penthouses</option>
          <option value="21">Hotel Apartments</option>
          <option value="19">Villa Compound</option>
          <option value="14">Residential Plot</option>
          <option value="12">Residential Floor</option>
          <option value="17">Residential Building</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold ">
          Min Price(AED)
        </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50
         text-xs sm:text-normal font-semibold"
          onChange={(e) => setMinPrice(e.target.value)}
        >
          <option value="10000">10,000</option>
          <option value="20000">20,000</option>
          <option value="30000">30,000</option>
          <option value="40000">40,000</option>
          <option value="50000">50,000</option>
          <option value="60000">60,000</option>
          <option value="85000">85,000</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold ">
          Max Price(AED)
        </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50 text-xs 
        sm:text-normal font-semibold "
          onChange={(e) => setMaxPrice(e.target.value)}
        >
          <option value="50000">50,000</option>
          <option value="60000">60,000</option>
          <option value="85000">85,000</option>
          <option value="110000">110,000</option>
          <option value="135000">135,000</option>
          <option value="160000">160,000</option>
          <option value="185000">185,000</option>
          <option value="200000">200,000</option>
          <option value="300000">300,000</option>
          <option value="400000">400,000</option>
          <option value="500000">500,000</option>
          <option value="600000">600,000</option>
          <option value="700000">700,000</option>
          <option value="800000">800,000</option>
          <option value="900000">900,000</option>
          <option value="1000000">1,000,000</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold "> Min Baths </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50 text-xs
         sm:text-normal font-semibold"
          onChange={(e) => setBathsMin(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold ">
          Furnish Type
        </label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50
         text-xs sm:text-normal font-semibold"
          onChange={(e) => setFurnishingStatus(e.target.value)}
        >
          <option value="furnished">Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>
      <div>
        <label className="text-xs opacity-70 font-semibold ">Min Rooms</label>{" "}
        <br />
        <select
          className="py-2 px-0.5 sm:px-2 rounded mt-1 mb-4 bg-gray-800 text-gray-50
         text-xs sm:text-normal font-semibold"
          onChange={(e) => setRoomsMin(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </>
  );
};

export default Select;
