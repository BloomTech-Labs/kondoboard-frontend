import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class LoginService {
    async queryUser() {
        const response = await axiosWithAuth().get(`${baseUrl}/users/`);
        console.log('user:',response.data)
        return response.data;
    }

    async createUserProfile(first_name, last_name, email) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, {first_name, last_name, email});
        return response.data;
    }
}

export default new LoginService();