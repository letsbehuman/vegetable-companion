import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
