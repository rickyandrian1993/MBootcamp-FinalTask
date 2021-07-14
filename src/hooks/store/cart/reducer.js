import checkIfExistInCart from "../../../helpers/checkIfExistInCart";

const defaultValue = {
  carts: [],
}

export const cartReducerActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVER_FROM_CART',
}

export default function cartReducer(state = defaultValue, action) {
  switch (action.type) {
    case cartReducerActionTypes.ADD_TO_CART:
      const newCart2 = checkIfExistInCart(state.carts, action.data);
      return {
        ...state,
        carts: [...newCart2],
      }
    case cartReducerActionTypes.REMOVE_FROM_CART:
      const newCart = removeCartById([...state.carts], action.data);
      return {
        ...state,
        carts: [...newCart],
      }
    default:
      return state;
  }
}

const removeCartById = (carts, product_id) => {
  const newCart = carts.filter(cart => cart._id !== product_id);
  return newCart;
}