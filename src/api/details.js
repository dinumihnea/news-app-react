import { API_LINK, getApiDefaultFields } from './apiUtils';

class DetailsApi {
  static fetchDetails = (id) => {
    return fetch(`${API_LINK}/news/${id}`, getApiDefaultFields());
  };
}

export default DetailsApi;
