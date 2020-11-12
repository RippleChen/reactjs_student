import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import * as transactonActions from "./../../../actions/transaction.action";

const TransactionPage = () => {
  const dispatch = useDispatch();
  const transactionReducer = useSelector((state) => state.transactionReducer);

  useEffect(() => {
    dispatch(transactonActions.getTransactions());
  }, []);

  // transaction_id
  // paid

  return (
    <div style={{ marginTop: 100 }}>
      <MaterialTable
        columns={[
          { title: "Id", field: "transaction_id" },
          { title: "Paid", field: "paid" },
        ]}
        data={transactionReducer.result ? transactionReducer.result : []}
        title="Demo Title"
      />
    </div>
  );
};

export default TransactionPage;
