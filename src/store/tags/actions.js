export const TAGS_FETCH_TAG_REQUEST = 'TAGS_FETCH_TAG_REQUEST';
export const TAGS_FETCH_TAG_FAILED = 'TAGS_FETCH_TAG_FAILED';
export const TAGS_FETCH_TAG_SUCCESS = 'TAGS_FETCH_TAG_SUCCESS';

export const fetchTagsRequest = () => (
  {
    type: TAGS_FETCH_TAG_REQUEST
  }
);

export const fetchTagsSuccess = (items) => (
  {
    type: TAGS_FETCH_TAG_SUCCESS,
    payload: items
  }
);

export const fetchTagsFailed = (message) => (
  {
    type: TAGS_FETCH_TAG_FAILED,
    payload: message
  }
);
