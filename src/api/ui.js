import { lightTheme } from '../styles/light';
import { darkTheme } from '../styles/dark';
import { appText as appTextEnglish } from '../i18n/en';
import { appText as appTextRomanian } from '../i18n/ro';
import { appText as appTextRussian } from '../i18n/ru';

export class Ui {

  static saveInStorage(key, value) {
    localStorage.setItem(key, value);
  }

  static getFromStorage(key, defaultValue) {
    let value = localStorage.getItem(key);
    return value ? value : defaultValue;
  }

  static getAppTheme(theme) {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  }

  static getAppText(lang) {
    switch (lang) {
      case 'en':
        return appTextEnglish;
      case 'ro':
        return appTextRomanian;
      case 'ru':
        return appTextRussian;
      default:
        return appTextEnglish;
    }
  };
}
