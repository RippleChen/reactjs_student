import React, { useEffect } from "react";

const StockPage = () => {
  const courses = ["Golang", "Angular", "ReactJS", "VueJS"];

  useEffect(() => {
    // dispatch to load product
    console.log("Initiallization Stock Page");
  }, []);

  return (
    <div>
      <ul>
        {courses.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;
