<<<<<<< HEAD
import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

=======
import axios from "axios";
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';
>>>>>>> 24210f323c0740ff6f3e24f54779d782633fdf7a
const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
    async addNewUser(user) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, user);
        return response.data;
    }
}

export default new ProfileService();