import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { GoVerified, GoUnverified } from "react-icons/go";
import { GiPersonInBed, GiCancel } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { FiTrello } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";
import { BsShieldFillCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import millify from "millify";
import { privateEstate } from "../../utils/api";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Loading from "../../components/loader/Loading";

const Estate = () => {
  const { estateID } = useParams();

  const [estate, setEstate] = useState([]);
  const [loading, setLoading] = useState(false);

  const photos = estate?.photos;

  useEffect(() => {
    setLoading(true);
    privateEstate(estateID).then((data) => {
      const result = data?.data;
      setEstate(result);
      console.log(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />

      {loading && <Loading />}

      {estate.length !== 0 && (
        <section className="">
          <div className="container">
            <div className="slider mt-10">
              {photos && <Slider data={photos} />}
            </div>
            <div className="details">
              <div className="flex flex-row justify-between px-6 items-center">
                <div className="flex flex-row space-x-4 items-center p-3">
                  {estate?.isVerified ? (
                    <GoVerified className="text-green-900" />
                  ) : (
                    <GoUnverified className="text-green-900" />
                  )}

                  <h3 className="text-sm font-bold">
                    AED {millify(estate?.price)}
                  </h3>
                </div>
                <div className="p-3 rounded-full" style={{ width: "25%" }}>
                  <img
                    src={estate?.agency?.logo?.url}
                    alt="agency"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center space-x-1 px-6  py-1 ">
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
              <div className="title px-6">
                <p className="text-sm font-medium p-3"> {estate?.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  mt-1 sm:mt-12 px-4 sm:px-5">
              <div className="agency px-6 py-3 mt-1   ">
                <h3 className="text-lg font-black opacity-90  pb-2">Agency</h3>

                <p className="font-semibold py-2">
                  Name:{" "}
                  <span className="font-bold text-orange-700">
                    {estate?.agency?.name}
                  </span>
                </p>
                <p className="font-semibold py-2 flex flex-row items-center ">
                  Availability:
                  <span className="mx-3 ">
                    {estate?.agency?.active ? (
                      <GrStatusGood className="mx-1 text-green-700" />
                    ) : (
                      <GiCancel />
                    )}
                  </span>
                </p>
                <p className="font-semibold py-2 flex flex-row items-center ">
                  Licences:
                  {estate?.agency?.licenses?.map((licence) => {
                    return (
                      <span className="mx-3 flex items-center space-x-1 ">
                        <BsShieldFillCheck className="mx-1 text-green-700" />{" "}
                        {licence.authority}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="agency px-6 py-3 mt-1   ">
                <h3 className="text-lg font-black opacity-90  pb-2">
                  Properties
                </h3>

                <p className="font-semibold py-2">
                  Status:{" "}
                  <span className="font-bold text-orange-700">
                    {estate?.completionStatus}
                  </span>
                </p>
                <p className="font-semibold py-2">
                  Purpose:{" "}
                  <span className="font-bold text-orange-700">
                    {estate?.purpose}
                  </span>
                </p>
                <p className="font-semibold py-2 flex flex-row items-center ">
                  Contatc Name:{" "}
                  <span className="font-bold text-orange-700">
                    {estate?.contactName}
                  </span>
                </p>
              </div>
            </div>
            <p className="font-semibold py-2 px-8 ">
              Description:{" "}
              <span className="font-bold text-dark-700 px-2 leading-relaxed">
                {estate?.description}
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Estate;
