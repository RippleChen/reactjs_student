import React from "react";

const StockPage = () => {
  const courses = ["Golang", "Angular", "ReactJS", "VueJS"];

  return (
    <div>
      <ul>
        {courses.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;
