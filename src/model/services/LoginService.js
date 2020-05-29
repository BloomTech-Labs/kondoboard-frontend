import axios from 'axios';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class LoginService {
    async queryUser(email) {
        console.log('sending user email',email)
        const response = await axios.get(`${baseUrl}/${email}`);
        return response.data;
    }

    async createUserProfile(first_name, last_name, email) {
        const response = await axios.post(`${baseUrl}/users`, {first_name, last_name, email});
        return response.data;
    }
}

export default new LoginService();