import { ActionTypes } from "../actions";

const initialState = {
  products: [],
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
