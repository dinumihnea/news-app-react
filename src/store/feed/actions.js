export const FEED_FETCH_DATA_REQUEST = 'FEED_FETCH_DATA_REQUEST';
export const FEED_FETCH_DATA_SUCCESS = 'FEED_RECEIVE_DATA_SUCCESS';
export const FEED_FETCH_DATA_FAILED = 'FEED_FETCH_DATA_FAILED';
export const FEED_SEARCH_REQUEST = 'FEED_SEARCH_REQUEST';
export const FEED_SEARCH_SUCCESS = 'FEED_SEARCH_SUCCESS';
export const FEED_SEARCH_FAILED = 'FEED_SEARCH_FAILED';
export const FEED_FETCH_CATEGORIES_REQUEST = 'FEED_FETCH_CATEGORIES_REQUEST';
export const FEED_FETCH_CATEGORIES_FAILED = 'FEED_FETCH_CATEGORIES_FAILED';
export const FEED_FETCH_CATEGORIES_SUCCESS = 'FEED_FETCH_CATEGORIES_SUCCESS';
export const FEED_FETCH_BOOKMARKS_REQUEST = 'FEED_FETCH_BOOKMARKS_REQUEST';
export const FEED_FETCH_BOOKMARKS_FAILED = 'FEED_FETCH_BOOKMARKS_FAILED';
export const FEED_FETCH_BOOKMARKS_SUCCESS = 'FEED_FETCH_BOOKMARKS_SUCCESS';
export const FEED_FETCH_BY_TAG_REQUEST = 'FEED_FETCH_BY_TAG_REQUEST';
export const FEED_FETCH_BY_TAG_FAILED = 'FEED_FETCH_BY_TAG_FAILED';
export const FEED_FETCH_BY_TAG_SUCCESS = 'FEED_FETCH_BY_TAG_SUCCESS';
export const fetchDataRequest = (category) => (
  {
    type: FEED_FETCH_DATA_REQUEST,
    payload: category
  }
);

export const fetchDataSuccess = (message) => (
  {
    type: FEED_FETCH_DATA_SUCCESS,
    payload: message
  }
);

export const fetchDataFailed = (message) => (
  {
    type: FEED_FETCH_DATA_FAILED,
    payload: message
  }
);

export const searchRequest = (query) => (
  {
    type: FEED_SEARCH_REQUEST,
    payload: query
  }
);

export const searchFailed = (message) => (
  {
    type: FEED_SEARCH_FAILED,
    payload: message
  }
);

export const searchSuccess = (items) => (
  {
    type: FEED_SEARCH_SUCCESS,
    payload: items
  }
);

export const fetchCategoriesRequest = (requestedLang) => (
  {
    type: FEED_FETCH_CATEGORIES_REQUEST,
    payload: requestedLang
  }
);

export const fetchCategoriesFailed = () => (
  {
    type: FEED_FETCH_CATEGORIES_FAILED
  }
);

export const fetchCategoriesSuccess = (categories) => (
  {
    type: FEED_FETCH_CATEGORIES_SUCCESS,
    payload: categories
  }
);

export const fetchBookmarksRequest = (username) => (
  {
    type: FEED_FETCH_BOOKMARKS_REQUEST,
    payload: username
  }
);

export const fetchBookmarksSuccess = (items) => (
  {
    type: FEED_FETCH_BOOKMARKS_SUCCESS,
    payload: items
  }
);

export const fetchBookmarksFailed = (message) => (
  {
    type: FEED_FETCH_BOOKMARKS_FAILED,
    payload: message
  }
);

export const fetchByTagRequest = (tag) => (
  {
    type: FEED_FETCH_BY_TAG_REQUEST,
    payload: tag
  }
);

export const fetchByTagSuccess = (items) => (
  {
    type: FEED_FETCH_BY_TAG_SUCCESS,
    payload: items
  }
);

export const fetchByTagFailed = (message) => (
  {
    type: FEED_FETCH_BY_TAG_FAILED,
    payload: message
  }
);
