<<<<<<< HEAD
import { axiosWithAuth } from '../../helpers/utils/axiosWithAuth.js';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class LoginService {
    async queryUser() {
        const response = await axiosWithAuth().get(`${baseUrl}/users/`);
        console.log('user:',response.data)
=======
import axios from 'axios';
import store from '@root/store';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';
import * as Action from '@state/actions';
const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class LoginService {
    async queryUser(email) {
        const response = await axiosWithAuth().get(`${baseUrl}/users`);
        store.dispatch(Action.setUserData(response.data));
>>>>>>> 24210f323c0740ff6f3e24f54779d782633fdf7a
        return response.data;
    }

    async createUserProfile(first_name, last_name, email) {
        const response = await axiosWithAuth().post(`${baseUrl}/users`, {first_name, last_name, email});
        return response.data;
    }
}

export default new LoginService();