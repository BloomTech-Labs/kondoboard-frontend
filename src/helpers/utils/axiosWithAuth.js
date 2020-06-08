import axios from 'axios';

export const axiosWithAuth = () => {
  const storage = window.localStorage.getItem('okta-token-storage');
  let token;
  if (storage === '{}' || storage === null || storage === undefined) {
    token = '';
  } else {
    token = JSON.parse(storage).accessToken.value;
  }
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
  });
};