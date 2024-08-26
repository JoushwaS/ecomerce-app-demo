import { hourglass } from "ldrs";
import React from "react";

export const Loader: React.FC = () => {
  hourglass.register();
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white z-50">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
    </div>
  );
};
