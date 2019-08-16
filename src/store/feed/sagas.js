import { put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import FeedApi from '../../api/feed'
import {
  FEED_FETCH_BOOKMARKS_REQUEST,
  FEED_FETCH_BY_TAG_REQUEST,
  FEED_FETCH_CATEGORIES_REQUEST,
  FEED_FETCH_DATA_REQUEST,
  FEED_SEARCH_REQUEST,
  fetchBookmarksFailed,
  fetchBookmarksSuccess,
  fetchByTagFailed,
  fetchByTagSuccess,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchDataFailed,
  fetchDataSuccess,
  searchFailed,
  searchSuccess
} from './actions';

import { APP_LANGUAGE_CHANGED } from '../ui/actions';

// TODO use i18n for error messages
// Main feed data
function* fetchApiData(action) {
  try {
    const request = yield FeedApi.fetchNews(action.payload);
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(fetchDataSuccess(data))
    } else {
      yield put(fetchDataFailed('Something went wrong. Please retry.'))
    }
  } catch (error) {
    yield put(fetchDataFailed('Something went wrong. Please retry.'))
  }
}

export function* watchFetchData() {
  yield takeEvery(FEED_FETCH_DATA_REQUEST, fetchApiData)
}

// Search
function* searchApiData(action) {
  try {
    const request = yield FeedApi.searchNews(action.payload);
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(searchSuccess(data))
    } else {
      yield put(searchFailed('Something went wrong. Please retry.'))
    }
  } catch (error) {
    yield put(searchFailed('Something went wrong. Please retry.'))
  }
}

export function* watchSearchData() {
  yield throttle(500, FEED_SEARCH_REQUEST, searchApiData)
}

// Categories
function* fetchApiCategories(action) {
  try {
    const request = yield FeedApi.fetchCategories();
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(fetchCategoriesSuccess(data))
    } else {
      yield put(fetchCategoriesFailed('Something went wrong. Please retry.'))
    }
  } catch (e) {
    yield put(fetchCategoriesFailed('Something went wrong. Please retry.'))
  }
}

export function* watchCategoriesRequest() {
  yield takeEvery(FEED_FETCH_CATEGORIES_REQUEST, fetchApiCategories);
  yield takeEvery(APP_LANGUAGE_CHANGED, fetchApiCategories)
}

// Bookmarks
function* fetchApiBookmarks(action) {
  try {
    const request = yield FeedApi.fetchBookmarks(action.payload);
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(fetchBookmarksSuccess(data))
    } else {
      yield put(fetchBookmarksFailed('Something went wrong. Please retry.'))
    }
  } catch (e) {
    yield put(fetchBookmarksFailed('Something went wrong. Please retry.'))
  }
}

export function* watchBookmarksRequest() {
  yield takeEvery(FEED_FETCH_BOOKMARKS_REQUEST, fetchApiBookmarks);
}

// Tags
function* fetchApiByTag(action) {
  try {
    const request = yield FeedApi.fetchByTag(action.payload);
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(fetchByTagSuccess(data))
    } else {
      yield put(fetchByTagFailed('Something went wrong. Please retry.'))
    }
  } catch (e) {
    yield put(fetchByTagFailed('Something went wrong. Please retry.'))
  }
}

export function* watchByTagRequest() {
  yield takeLatest(FEED_FETCH_BY_TAG_REQUEST, fetchApiByTag);
}
