import { ADD_TO_CART, DEFUALT_CART } from "../action/actions-default";

const INITIAL_STATE = {
  total: 0,
  discountedTotal: 0,
  totalProducts: 0,
  totalQuantity: 0,
  products: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEFUALT_CART:
      return action.payload;

    case ADD_TO_CART:
      const { discountPercentage, price } = action.payload;
      let copyState = JSON.parse(JSON.stringify(state));
      copyState.totalQuantity++;
      copyState.totalProducts++;
      copyState.total = copyState.total + price;
      copyState.discountedTotal = copyState.total + discountPercentage;
      copyState.products.push(action.payload);
      return copyState;

    default:
      return state;
  }
};
