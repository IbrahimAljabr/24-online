import { ActionTypes } from "../actions";

const initialState = {
  product: [],
};

export const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };

    default:
      return state;
  }
};
