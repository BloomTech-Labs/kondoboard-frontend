import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
    async addNewUser(user) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, user);
        return response.data;
    }
}

export default new ProfileService();