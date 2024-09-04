import React from "react";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex justify-center mt-36">
      <Image
        className="h-20"
        src="/spinner.svg"
        alt="Loading..."
        width={80}
        height={80}
      />
    </div>
  );
};

export default LoadingPage;
