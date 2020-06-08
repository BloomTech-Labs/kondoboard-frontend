import axios from "axios";
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';
const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
    async addNewUser(user) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, user);
        return response.data;
    }

    async updateUser(user, id) {
        const response = await axiosWithAuth().put(`${baseUrl}/users/${id}`, user);
        return response;
    }
}

export default new ProfileService();