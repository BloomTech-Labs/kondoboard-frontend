import axios from "axios";
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';
const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
    async addNewUser(user) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, user);
        return response.data;
    }
}

export default new ProfileService();