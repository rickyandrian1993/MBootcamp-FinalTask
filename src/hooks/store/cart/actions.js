import handleToastNotif from "../../../helpers/handleNotifToast"
import { cartReducerActionTypes } from "./reducer"

export const addToCart = (product) => {
  handleToastNotif('success', 'Added to cart.')
  return {
    type: cartReducerActionTypes.ADD_TO_CART,
    data: product,
  }
}

export const removeFromCart = (product_id) => {
  handleToastNotif('success', 'Remove from cart.')
  return {
    type: cartReducerActionTypes.REMOVE_FROM_CART,
    data: product_id,
  }
}

