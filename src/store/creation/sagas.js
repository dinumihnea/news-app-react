import { put, takeEvery } from 'redux-saga/effects';
import Creation from '../../api/creation';
import { CREATE_NEWS_REQUEST, createNewsFailed, createNewsSuccess } from './actions';

function* postNewsToApi(action) {
  try {
    const response = yield Creation.postNews(action.payload);
    const status = yield response.status;
    if (status === 201) {
      const news = yield response.json();
      yield put(createNewsSuccess(news));
    } else {
      yield put(createNewsFailed('Something went wrong. Please retry.'));
    }
  } catch (e) {
    console.error(e);
    yield put(createNewsFailed('Something went wrong. Please retry.'));
  }
}

export function* watchCreateRequest() {
  yield takeEvery(CREATE_NEWS_REQUEST, postNewsToApi);
}
