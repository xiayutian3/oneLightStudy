import React from "react";
import useFetch from "react-fetch-hook";

const TestComponent = () => {
   const  { isLoading, data } = useFetch("/api/data") as any
  //  console.log(isLoading,data)


  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <h1>{data.result}</h1>
  );
};

export default TestComponent;