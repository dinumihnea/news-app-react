export const DETAILS_FETCH_REQUEST = 'DETAILS_FETCH_REQUEST';
export const DETAILS_FETCH_SUCCESS = 'DETAILS_FETCH_SUCCESS';
export const DETAILS_FETCH_FAILED = 'DETAILS_FETCH_FAILED';

export const detailsFetchRequest = (id) => (
  {
    type: DETAILS_FETCH_REQUEST,
    payload: id
  }
);

export const detailsFetchSuccess = (item) => (
  {
    type: DETAILS_FETCH_SUCCESS,
    payload: item
  }
);

export const detailsFetchFailed = (message) => (
  {
    type: DETAILS_FETCH_FAILED,
    payload: message
  }
);
