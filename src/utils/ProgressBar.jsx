import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-orange-500 h-3 rounded-full transition-all duration-300 max-w-full"
        style={{ width: `${percentage}%` }}
      ></div>
      {/* Circle at the end */}
      <div
        className="absolute -top-1 bg-orange-500 border-2 border-white rounded-full h-5 w-5"
        style={{ left: `${ percentage > 100 ? 99 : percentage - 1}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
