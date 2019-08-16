import { put, takeEvery } from 'redux-saga/effects'
import { fetchTagsFailed, fetchTagsSuccess, TAGS_FETCH_TAG_REQUEST } from './actions';
import TagsApi from '../../api/tags';

function* fetchApiTags(action) {
  try {
    const request = yield TagsApi.fetchAll();
    const status = request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(fetchTagsSuccess(data))
    } else {
      yield put(fetchTagsFailed('Something went wrong. Please retry.'))
    }
  } catch (e) {
    yield put(fetchTagsFailed('Something went wrong. Please retry.'))
  }
}

export function* watchTagsRequest() {
  yield takeEvery(TAGS_FETCH_TAG_REQUEST, fetchApiTags);
}
