import axios from 'axios';

export const axiosWithAuth = (url) => {
    const storage = window.localStorage.getItem('okta-token-storage');
        const token = JSON.parse(storage).accessToken.value;
        return axios.create({
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            baseURL: ''
        })
}
