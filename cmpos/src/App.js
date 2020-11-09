import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Demo } from "./Demo";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Demo />
    </div>
  );
}
