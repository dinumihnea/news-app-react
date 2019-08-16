import { API_LINK, getApiDefaultFields } from './apiUtils';

class FeedApi {
    static fetchNews = (category) => {
        if (category) {
            return fetch(`${API_LINK}/news/categories/${category}`, getApiDefaultFields())
        }
        return fetch(`${API_LINK}/news`, getApiDefaultFields())
    };

    static fetchCategories = () => {
        return fetch(`${API_LINK}/categories`, getApiDefaultFields())
    };

    static fetchBookmarks = (user) => {
        return fetch(`${API_LINK}/users/me/bookmarks`, getApiDefaultFields())
    };

    static fetchByTag = (tag) => {
        return fetch(`${API_LINK}/news/tags/${tag}`, getApiDefaultFields())
    };

    static searchNews = (query) => {
        if (query) {
            return fetch(`${API_LINK}/search/${query}`, getApiDefaultFields())
        }
        return fetch(`${API_LINK}/news`, getApiDefaultFields())
    };
}

export default FeedApi;
