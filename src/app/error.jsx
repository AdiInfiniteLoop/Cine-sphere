"use client";

import { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      {/* //Style this later SOmething went wrong */}
      <button className="hover:text-yellow-500" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default ErrorPage;
