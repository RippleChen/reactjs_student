import React from "react";
import Card from "@material-ui/core/Card";
import { Typography, Grid } from "@material-ui/core";

const StockCard = () => {
  return (
    <Card>
      <Grid container style={{ minHeight: 70 }}>
        <Grid item style={{ backgroundColor: "red", flexGrow: 1, padding: 24 }}>
          <span>xxxx</span>
        </Grid>

        <Grid item style={{ backgroundColor: "yellow" }}>
          <span>yyyy</span>
        </Grid>
      </Grid>
    </Card>
  );
};

export default StockCard;
