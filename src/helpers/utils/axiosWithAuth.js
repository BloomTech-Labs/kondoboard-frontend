import axios from 'axios';

export const axiosWithAuth = (url) => {
    const token = window.localStorage.getItem('kondotoken');
        return axios.create({
            headers:{
                'Content-Type': 'application/json',
                'authorization': `${token}`,
            },
            baseURL: ''
        })
}
