import { takeEvery } from 'redux-saga/effects'
import { Ui } from '../../api/ui';
import { APP_LANGUAGE_CHANGED, APP_THEME_CHANGED } from './actions';

// Theme
function* saveTheme(action) {
  yield Ui.saveInStorage('news-app-ui-theme', action.payload)
}

export function* watchThemeChange() {
  yield takeEvery(APP_THEME_CHANGED, saveTheme)
}

// Language
function* saveLanguage(action) {
  yield Ui.saveInStorage('news-app-ui-language', action.payload)
}

export function* watchLanguageChange() {
  yield takeEvery(APP_LANGUAGE_CHANGED, saveLanguage)
}
