import { TAGS_FETCH_TAG_FAILED, TAGS_FETCH_TAG_REQUEST, TAGS_FETCH_TAG_SUCCESS } from './actions';

let defaultState = {
  popular: []
};

export const tagsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TAGS_FETCH_TAG_REQUEST: {
      return {
        ...state,
        popular: []
      }
    }
    case TAGS_FETCH_TAG_SUCCESS: {
      return {
        ...state,
        popular: action.payload
      }
    }
    case TAGS_FETCH_TAG_FAILED: {
      return {
        ...state,
        popular: []
      }
    }
    default:
      return state;
  }
};
