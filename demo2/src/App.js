import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as appActions from "./actions/app.actions";
export default function App() {
  const dispatch = useDispatch();
  const appReducer = useSelector((state) => state.appReducer);
  return (
    <div>
      <button onClick={() => dispatch(appActions.add(1))}>+</button>
      <button onClick={() => dispatch(appActions.add(1))}>-</button>
      <span>{appReducer && appReducer.count}</span>
    </div>
  );
}
