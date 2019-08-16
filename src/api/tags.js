import { API_LINK, getApiDefaultFields } from './apiUtils';

class TagsApi {
  static fetchAll = () => {
    return fetch(`${API_LINK}/tags`, getApiDefaultFields())
  };
}

export default TagsApi;
