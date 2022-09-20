import axios from 'axios';

const BASE_URL = 'https://vegetable-companion-backend.onrender.com/api';

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
