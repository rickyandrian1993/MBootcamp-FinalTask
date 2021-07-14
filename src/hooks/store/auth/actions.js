import api from '../../../api';
import { authReducerActionTypes } from "./reducer";
import handleError from '../../../helpers/handleError';
import handleToastNotif from '../../../helpers/handleNotifToast';

export const login = (username, password) => {
  return (dispatch) => {
    return new Promise(async () => {
      dispatch({type: authReducerActionTypes.LOADING, data: true});
      try {
        const { data } = await api.post('/login', {
          username,
          password,
        });
        api.defaults.headers.token = data.token;
        dispatch({
          type: authReducerActionTypes.LOGIN,
          data: { username: data.username, email: data.email, avatar: data.avatar, token: data.token },
        });
      } catch (error) {
        handleError(error);
      } finally {
        dispatch({type: authReducerActionTypes.LOADING, data: false});
      }
    });
  }
}

export const loginToken = () => {
  return (dispatch) => {
    dispatch({type: authReducerActionTypes.LOADING, data: true});
    return new Promise(async () => {
      try {
        const { data } = await api.post('login/token', {}, {
          headers: {
            token: localStorage.getItem('token'),
          }
        });
        api.defaults.headers.token = localStorage.getItem('token');
        dispatch({
          type: authReducerActionTypes.LOGIN,
          data: { username: data.user.username, email: data.user.email, avatar: data.user.avatar, token: localStorage.getItem('token') }
        });
      } catch (error) {
        handleError(error);
      } finally {
        dispatch({type: authReducerActionTypes.LOADING, data: false});
      }
    });
  };
}

export const register = (email, username, password) => {
  return (dispatch) => {
    return new Promise(async () => {
      dispatch({type: authReducerActionTypes.LOADING, data: true});
      try {
        await api.post('/register', {
          username,
          password,
          email,
        });
        handleToastNotif('success', 'Your registration success!')
      } catch (error) {
        handleError(error);
      } finally {
        dispatch({type: authReducerActionTypes.LOADING, data: false});
      }
    });
  }
}

export const logout = () => ({
    type: authReducerActionTypes.LOGOUT
});