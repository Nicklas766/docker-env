import axios from 'axios';

const URL = 'http://backend.localhost/api';

export default {

  getData(route) {
    return axios.get(`${URL + route}`);
  },

  postData(route, body) {
    return axios.post(`${URL + route}`, body);
  },

};
