import DetailsApi from '../../api/details';
import { put, takeEvery } from 'redux-saga/effects'
import { DETAILS_FETCH_REQUEST, detailsFetchFailed, detailsFetchSuccess } from './actions';

function* fetchApiDetails(action) {
  try {
    const request = yield DetailsApi.fetchDetails(action.payload);
    const status = yield request.status;
    if (status === 200) {
      const data = yield request.json();
      yield put(detailsFetchSuccess(data))
    } else {
      yield put(detailsFetchFailed('Something went wrong. Please retry.'))
    }
  } catch (e) {
    console.error(e);
    yield put(detailsFetchFailed('Something went wrong. Please retry.'))
  }
}

export function* watchFetchDetails() {
  yield takeEvery(DETAILS_FETCH_REQUEST, fetchApiDetails)
}
