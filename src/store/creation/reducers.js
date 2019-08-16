import { CREATE_NEWS_FAILED, CREATE_NEWS_REQUEST, CREATE_NEWS_SUCCESS } from './actions';

let defaultState = {
  draftNews: {},
  errorMessage: '',
  isLoading: true
};

export const creationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEWS_REQUEST: {
      return {
        ...state,
        draftNews: {},
        errorMessage: '',
        isLoading: true
      };
    }
    case CREATE_NEWS_SUCCESS: {
      return {
        ...state,
        draftNews: action.payload,
        errorMessage: '',
        isLoading: false
      };
    }
    case CREATE_NEWS_FAILED: {
      return {
        ...state,
        draftNews: {},
        errorMessage: action.payload,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
