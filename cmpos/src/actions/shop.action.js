import { httpClient } from "./../utils/HttpClient";

import { SHOP_UPDATE_ORDER, SHOP_UPDATE_PAYMENT, server } from "../constants";

const setStateShoptoUpdateOrder = (payload) => ({
  type: SHOP_UPDATE_ORDER,
  payload: payload,
});

const doUpdateOrder = (dispatch, orderLines) => {
  let totalPrice = 0;
  let taxAmt = 0;
  for (let item of orderLines) {
    totalPrice += item.price * item.qty;
  }
  taxAmt = totalPrice * 0.07;

  dispatch(
    setStateShoptoUpdateOrder({
      orderLines,
      totalPrice,
      taxAmt,
    })
  );
};

export const addOrder = (item) => {
  return (dispatch, getState) => {
    let orderLines = getState().shopReducer.mOrderLines;
    let index = orderLines.indexOf(item);
    if (index === -1) {
      item.qty = 1;
      orderLines.unshift(item);
    } else {
      orderLines[index].qty++;
    }

    doUpdateOrder(dispatch, orderLines);
  };
};

export const removeOrder = () => {};

export const togglePaymentState = () => {};
