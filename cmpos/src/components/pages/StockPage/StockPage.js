import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as stockActions from "./../../../actions/stock.action";
import MaterialTable, { MTableToolbar } from "material-table";

const StockPage = () => {
  const courses = ["Golang", "Angular", "ReactJS", "VueJS"];
  const stockReducer = useSelector(({ stockReducer }) => stockReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch to load product
    console.log("Initiallization Stock Page");
    dispatch(stockActions.getProducts());
  }, []);

  return (
    <div>
      <ul>
        {stockReducer.result &&
          stockReducer.result.map((item) => (
            <li key={item.product_id}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default StockPage;
