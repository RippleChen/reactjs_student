import { APP_ADD, APP_DEL } from "../constants";

const initialState = {
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ADD:
      return { ...state, count: state.count + payload };
    case APP_DEL:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
