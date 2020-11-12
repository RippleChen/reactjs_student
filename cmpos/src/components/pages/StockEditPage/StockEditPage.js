import React from "react";

const StockEditPage = (props) => {
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    setId(props.match.params.id);
  }, []);

  return <div style={{ marginTop: 100 }}>StockEditPage {id}</div>;
};

export default StockEditPage;
