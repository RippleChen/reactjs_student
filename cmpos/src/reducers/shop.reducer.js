import { SHOP_UPDATE_ORDER, SHOP_UPDATE_PAYMENT } from "../constants";

const initialState = {
  mOrderLines: [],
  mTotalPrice: 0,
  mTaxAmt: 0,
  mIsPaymentMade: false,
  mGiven: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOP_FETCHING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
