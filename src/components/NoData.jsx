"use client";

import Lottie from "lottie-react";
import noData from "../assests/lottie/no data.json";

const NoDataPage = () => {
  return (
    <div className="w-1/2 h-96 mx-auto">
      <Lottie animationData={noData} loop autoplay />
    </div>
  );
};

export default NoDataPage;