import { SHOP_FETCHING } from "../constants";

const initialState = {
  mTaxAmt: 0,
  mIsPaymentMade: false,
  mTotalPrice: 0,
  mOrderLines: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOP_FETCHING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
