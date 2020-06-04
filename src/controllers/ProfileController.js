import store from '../store';
import * as Action from '@state/actions';
import ProfileService from '@services/ProfileService';

class ProfileController {
  async addNewUser(first_name, last_name, email) {
    // @NOTE: if you aren't going to use 'user' anywhere then delete everything before 'await'
    const user = await ProfileService.addNewUser(first_name, last_name, email);
    // @NOTE: why is this setting user data to an empty object?
    store.dispatch(Action.setUserData({}));
  }

  async updateUser(user, id) {
    const response = await ProfileService.updateUser(user, id);
    if (response.status === 201) {
      store.dispatch(Action.setUserData(response.data));
    }
  }
}

export default new ProfileController();
