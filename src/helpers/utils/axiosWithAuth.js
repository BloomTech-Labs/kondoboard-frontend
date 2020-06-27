import axios from 'axios';


export const axiosWithAuth = () => {

  const storage = window.localStorage.getItem('okta-token-storage');
  let token = '';

  if (storage !== '{}' && storage !== null & storage !== undefined) { // make sure the token exists before attempting to access it
    if (JSON.parse(storage).accessToken === undefined) { // if true, token is corrupted. Bug with either firefox or okta, not sure yet what exactly causes it.
      window.localStorage.removeItem('okta-token-storage'); // delete the token, thus logging out the user
    } else {
    token = JSON.parse(storage).accessToken.value;
    console.log(token)
    }
  } 
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    },
  });
};