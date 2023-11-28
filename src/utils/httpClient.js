import axios from 'axios';

export function get(url) {
    return axios.get('https://api.espacioindustria.cl/api/provider/public' + url)
        .then(response => response.data);
}

export function getFilter(url) {
    return axios.get('https://api.espacioindustria.cl/api' + url)
        .then(response => response.data);
}