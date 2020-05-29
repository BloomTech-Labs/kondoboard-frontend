import axios from 'axios';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class LoginService {
    async queryUser(email) {
        console.log('flag', email)
        const response = await axios.get(`${baseUrl}/${email}`);
        return response.data;
    }

    async createUserProfile(first_name, last_nambe, email) {
        const response = await axios.post(`${baseUrl}/users`, {first_name, last_nambe, email});
        return response.data;
    }


}

export default new LoginService();