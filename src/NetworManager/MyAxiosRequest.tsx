import axios from 'axios';
import URL from './Url';

export const apiRequest = async (
  endpoint,
  method,
  data,
  headers = {},
  config = {},
) => {
  const url = URL.BASE_URL + endpoint;

  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getApiRequest = async endpoint => {
  const url = URL.BASE_URL + endpoint;
  console.log(url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
