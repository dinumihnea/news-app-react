import { API_LINK } from './apiUtils';
import { Ui } from './ui';

class Creation {
  static postNews = (draftNews) => {
    return fetch(`${API_LINK}/news`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': Ui.getFromStorage('x-auth-token', null)
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(draftNews) // body data type must match "Content-Type" header
    })
  }
}

export default Creation;
