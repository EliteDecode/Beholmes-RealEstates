import React from "react";
import banner from "../../assets/banner.jpg";
import "./singleEstate.css";
import Carousel from "react-elastic-carousel";
const breaks = [
  { width: 1, itemsToShow: 1 },
  { width: 576, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 998, itemsToShow: 3 },
];

const Slider = ({ data }) => {
  return (
    <Carousel
      breakPoints={breaks}
      enableAutoPlay
      autoPlaySpeed={2500}
      className="p-1"
    >
      {data.map((item) => {
        return (
          <div className="mt-5 py-2 " key={item.id}>
            {" "}
            <a href={item.url}>
              <img
                src={item?.url || banner}
                alt="banner"
                style={{ height: "200px", width: "100%" }}
                className="rounded-lg object-fill border-2 border-gray-800 shadow-gray-300 shadow-xl"
              />
            </a>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
