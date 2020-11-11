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
      <MaterialTable
        columns={[
          { title: "id", field: "product_id" },
          { title: "Name", field: "name" },
          { title: "Stock", field: "stock", type: "numeric" },
          { title: "Price", field: "price", type: "numeric" },
        ]}
        data={stockReducer.result ? stockReducer.result : []}
        title="Stock Data"
      />
    </div>
  );
};

export default StockPage;
