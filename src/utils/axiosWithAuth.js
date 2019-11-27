import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://supportifyafrica.herokuapp.com/api',
    headers: {
      'Authorization': token,
    }
  });
};