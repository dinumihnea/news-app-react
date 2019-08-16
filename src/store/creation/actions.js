export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILED = 'CREATE_NEWS_FAILED';

export const createNewsRequest = (news) => (
  {
    type: CREATE_NEWS_REQUEST,
    payload: news
  }
);

export const createNewsSuccess = (news) => (
  {
    type: CREATE_NEWS_SUCCESS,
    payload: news
  }
);

export const createNewsFailed = (message) => (
  {
    type: CREATE_NEWS_FAILED,
    payload: message
  }
);

