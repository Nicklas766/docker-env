import axios from 'axios';
const URL = 'http://backend.localhost/api';

export default {

  async getData(route) {
    return await axios.get(`${URL + route}`);
  },

  postData(route, body) {
    return axios.post(`${URL + route}`, body);
  }

}
