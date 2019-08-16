export const APP_TOGGLE_DRAWER_OPEN = 'APP_TOGGLE_DRAWER_OPEN';
export const APP_LANGUAGE_CHANGED = 'APP_LANGUAGE_CHANGED';
export const APP_THEME_CHANGED = 'APP_THEME_CHANGED';


export const toggleDrawerOpen = () => (
  {
    type: APP_TOGGLE_DRAWER_OPEN
  }
);

export const changeAppLanguage = (lang) => (
  {
    type: APP_LANGUAGE_CHANGED,
    payload: lang
  }
);

export const changeTheme = (theme) => (
  {
    type: APP_THEME_CHANGED,
    payload: theme
  }
);
