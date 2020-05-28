import axios from 'axios';

export const axiosWithAuth = (url) => {
    const token = window.localStorage.getItem('okta-token-storage');
        return axios.create({
            headers:{
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token.accessToken.value}`,
            },
            baseURL: ''
        })
}
