const defaultValue = {
  isLoggedIn: false,
  username: '',
  email: '',
  avatar: '',
  isLoading: false,
};

export const authReducerActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
};

export default function authReducer(state = defaultValue, action) {
  switch (action.type) {
    case authReducerActionTypes.LOGIN:
      localStorage.setItem('token', action.data.token);
      return {
        ...state,
        isLoggedIn: true,
        username: action.data.username,
        email: action.data.email,
        avatar: action.data.avatar,
      };
    case authReducerActionTypes.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        email: '',
        avatar: '',
      };
    case authReducerActionTypes.LOADING:
      return {
        ...state,
        isLoading: action.data,
      }
    default:
      return state;
  }
}