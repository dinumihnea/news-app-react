import { APP_LANGUAGE_CHANGED, APP_THEME_CHANGED, APP_TOGGLE_DRAWER_OPEN } from './actions';
import { Ui } from '../../api/ui';


const activeLanguage = Ui.getFromStorage('news-app-ui-language', 'en');
const activeTheme = Ui.getFromStorage('news-app-ui-theme', 'light');

let defaultState = {
  drawerOpen: true,
  lang: activeLanguage,
  text: Ui.getAppText(activeLanguage),
  themeName: activeTheme,
  theme: Ui.getAppTheme(activeTheme)
};

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case APP_TOGGLE_DRAWER_OPEN: {
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    }
    case APP_LANGUAGE_CHANGED: {
      return {
        ...state,
        lang: action.payload,
        text: Ui.getAppText(action.payload)
      }
    }
    case APP_THEME_CHANGED: {
      return {
        ...state,
        themeName: action.payload,
        theme: Ui.getAppTheme(action.payload)
      }
    }
    default:
      return state;
  }
};
