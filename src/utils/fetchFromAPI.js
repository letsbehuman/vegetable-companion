import axios from 'axios';

const BASE_URL = 'https://lit-forest-04624.herokuapp.com//api';

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
