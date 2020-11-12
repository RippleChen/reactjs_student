import React from "react";
import Card from "@material-ui/core/Card";
import { Typography, Grid } from "@material-ui/core";

const StockCard = () => {
  return (
    <Card>
      <Grid container style={{ minHeight: 70 }}>
        <Grid item>
          <span>2134</span>
        </Grid>
      </Grid>
    </Card>
  );
};

export default StockCard;
