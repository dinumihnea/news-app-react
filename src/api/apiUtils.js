import { Ui } from './ui';

export const API_LINK = `http://localhost:8080/api/v1`;

export const getApiDefaultFields = () => {
  return {
    headers: {
      'x-auth-token': Ui.getFromStorage('x-auth-key', null),
      'content-language': Ui.getFromStorage('news-app-ui-language', 'en')
    }
  }
};
