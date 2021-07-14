const defaultValue = {
  isLoading: false,
};

export const productReducerActionTypes = {
  LOADING: 'LOADING',
};

export default function productReducer(state = defaultValue, action) {
  switch (action.type) {
    case productReducerActionTypes.LOADING:
      return {
        ...state,
        isLoading: action.data,
      }
    default:
      return state;
  }
}