import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Puff
        ariaLabel="three-dots-loading"
        color="#fb923c"
        height={550}
        width={80}
      />
    </div>
  );
};

export default Loading;
