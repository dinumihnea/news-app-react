import { DETAILS_FETCH_FAILED, DETAILS_FETCH_REQUEST, DETAILS_FETCH_SUCCESS } from './actions';

let defaultState = {
  item: {},
  errorMessage: '',
  isLoading: true
};

export const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Main details data
    case DETAILS_FETCH_REQUEST: {
      return {
        ...state,
        item: {},
        errorMessage: '',
        isLoading: true
      }
    }
    case DETAILS_FETCH_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        errorMessage: '',
        isLoading: false
      }
    }
    case DETAILS_FETCH_FAILED: {
      return {
        ...state,
        item: {},
        errorMessage: action.payload,
        isLoading: false
      }
    }
    default:
      return state;
  }
};
