import { all } from 'redux-saga/effects';
import {
  watchBookmarksRequest,
  watchByTagRequest,
  watchCategoriesRequest,
  watchFetchData,
  watchSearchData
} from '../store/feed/sagas';
import { watchLanguageChange, watchThemeChange } from '../store/ui/sagas';
import { watchFetchDetails } from '../store/details/sagas';
import { watchTagsRequest } from '../store/tags/sagas';
import { watchCreateRequest } from '../store/creation/sagas';

function* rootSaga() {
  yield all([
    // UI
    watchThemeChange(),
    watchLanguageChange(),
    // Feed
    watchFetchData(),
    watchSearchData(),
    watchCategoriesRequest(),
    watchBookmarksRequest(),
    watchByTagRequest(),
    // Details
    watchFetchDetails(),
    // Tags
    watchTagsRequest(),
    // Creation
    watchCreateRequest()
  ]);
}

export default rootSaga;
