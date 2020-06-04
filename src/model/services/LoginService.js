// @NOTE: remove
import store from '@root/store';
import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';
// @NOTE: remove
import * as Action from '@state/actions';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api');

class LoginService {
  async queryUser() {
    const response = await axiosWithAuth().get(`${baseUrl}/users`);
    // @NOTE: this data should be returned to the controller, and the dispatch should happen there.
    store.dispatch(Action.setUserData(response.data));
    return response.data;
  }

  async createUserProfile(first_name, last_name, email) {
    const response = await axiosWithAuth().post(`${baseUrl}/users`, {first_name, last_name, email});
    return response.data;
  }
}

export default new LoginService();
