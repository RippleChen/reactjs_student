import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import * as transactonActions from "./../../../actions/transaction.action";

const TransactionPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactonActions.getTransactions());
  }, []);

  // transaction_id
  // paid

  return (
    <div style={{ marginTop: 100 }}>
      <MaterialTable
        columns={[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        ]}
        title="Demo Title"
      />
    </div>
  );
};

export default TransactionPage;
