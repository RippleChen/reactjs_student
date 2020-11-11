import React, { useEffect } from "react";
import * as stockActions from "./../../../actions/stock.action";


const StockPage = () => {
  const courses = ["Golang", "Angular", "ReactJS", "VueJS"];
  const stockReducer = useSelector(({ stockReducer }) => stockReducer);
  const dispatch = useDispatch();


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
