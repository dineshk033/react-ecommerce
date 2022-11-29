import { ADD_TO_CART, REMOVE_CART, UPDATE_CART } from "./actions-default";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};

export const updateCart = (data) => {
  return { type: UPDATE_CART, payload: data };
};

export const removeCart = (data) => {
  return { type: REMOVE_CART, payload: data };
};
