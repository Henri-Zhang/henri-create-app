import axios from 'axios';

export const fetchData = url => {
  return axios.get(url);
};
