import api from '../../../api';
import { productReducerActionTypes } from "./reducer";
import handleError from '../../../helpers/handleError';
import handleToastNotif from '../../../helpers/handleNotifToast';

export const addProduct = (name, description, price, image) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch({type: productReducerActionTypes.LOADING, data: true});
      try {
        await api.post('/products', {
          name: name,
          description: description,
          price: price,
          image: image,
        });
        handleToastNotif('success', 'Product has been added');
        resolve();
      } catch (error) {
        handleError(error);
        reject(error);
      } finally {
        dispatch({type: productReducerActionTypes.LOADING, data: false});
      }
    });
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    return new Promise(async () => {
      dispatch({type: productReducerActionTypes.LOADING, data: true});
      try {
        await api.delete(`/products/${id}`);
        handleToastNotif('success', 'Product has been deleted');
      } catch (error) {
        handleError(error);
      } finally {
        dispatch({type: productReducerActionTypes.LOADING, data: false});
      }
    });
  }
}
