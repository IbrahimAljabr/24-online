import { ActionTypes } from "../actions";

const initialState = {
  category: [],
};

export const category = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: payload };

    default:
      return state;
  }
};
