import {
  FEED_FETCH_BOOKMARKS_FAILED,
  FEED_FETCH_BOOKMARKS_REQUEST,
  FEED_FETCH_BOOKMARKS_SUCCESS,
  FEED_FETCH_BY_TAG_FAILED,
  FEED_FETCH_BY_TAG_REQUEST,
  FEED_FETCH_BY_TAG_SUCCESS,
  FEED_FETCH_CATEGORIES_FAILED,
  FEED_FETCH_CATEGORIES_REQUEST,
  FEED_FETCH_CATEGORIES_SUCCESS,
  FEED_FETCH_DATA_FAILED,
  FEED_FETCH_DATA_REQUEST,
  FEED_FETCH_DATA_SUCCESS,
  FEED_SEARCH_FAILED,
  FEED_SEARCH_REQUEST,
  FEED_SEARCH_SUCCESS
} from './actions';

let defaultState = {
  categories: [],
  items: [],
  errorMessage: '',
  isLoading: true,
  activeTag: ''
};

export const feedReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Main feed data
    case FEED_FETCH_DATA_REQUEST: {
      return {
        ...state,
        items: [],
        errorMessage: '',
        isLoading: true,
        activeTag: ''
      }
    }
    case FEED_FETCH_DATA_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        errorMessage: '',
        isLoading: false,
        activeTag: ''
      }
    }
    case FEED_FETCH_DATA_FAILED: {
      return {
        ...state,
        items: [],
        errorMessage: action.payload,
        isLoading: false,
        activeTag: ''
      }
    }
    // Search
    case FEED_SEARCH_REQUEST : {
      return {
        ...state,
        items: [],
        errorMessage: '',
        isLoading: true,
        activeTag: ''
      }
    }
    case FEED_SEARCH_SUCCESS : {
      return {
        ...state,
        items: action.payload,
        errorMessage: '',
        isLoading: false,
        activeTag: ''
      }
    }
    case FEED_SEARCH_FAILED : {
      return {
        ...state,
        items: [],
        errorMessage: action.payload,
        isLoading: false,
        activeTag: ''
      }
    }
    // Categories
    case FEED_FETCH_CATEGORIES_REQUEST: {
      return {
        ...state,
        categories: []
      }
    }
    case FEED_FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        items: [],
        categories: [],
        errorMessage: action.payload
      }
    }
    case FEED_FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
        errorMessage: ''
      }
    }
    // Bookmarks
    case FEED_FETCH_BOOKMARKS_REQUEST: {
      return {
        ...state,
        items: [],
        errorMessage: '',
        isLoading: true,
        activeTag: ''
      }
    }
    case FEED_FETCH_BOOKMARKS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        errorMessage: '',
        isLoading: false,
        activeTag: ''
      }
    }
    case FEED_FETCH_BOOKMARKS_FAILED: {
      return {
        ...state,
        items: [],
        errorMessage: action.payload,
        isLoading: false,
        activeTag: ''
      }
    }
    // By tags
    case FEED_FETCH_BY_TAG_REQUEST: {
      return {
        ...state,
        items: [],
        errorMessage: '',
        isLoading: true,
        activeTag: action.payload
      }
    }
    case FEED_FETCH_BY_TAG_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        errorMessage: '',
        isLoading: false,
      }
    }
    case FEED_FETCH_BY_TAG_FAILED: {
      return {
        ...state,
        items: [],
        errorMessage: action.payload,
        isLoading: false
      }
    }
    default:
      return state;
  }
};
