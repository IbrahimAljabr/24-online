export const ActionTypes = {
  SET_CATEGORY: "SET_CATEGORY",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  SELECTED_PRODUCT: "SELECTED_PRODUCT",
  // REMOVE_SELECTED_CATEGORY: "REMOVE_SELECTED_CATEGORY",
  // REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};

export const setCategory = (category) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category,
  };
};
export const setProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const setProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
