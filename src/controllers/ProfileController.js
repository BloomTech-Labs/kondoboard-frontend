import store from '@root/store';
import * as Action from '@state/actions';
import ProfileService from '@services/ProfileService';

class ProfileController {
  async addNewUser(first_name, last_name, email) {
    await ProfileService.addNewUser(first_name, last_name, email);
  }

  async updateUser(user, id) {
    const response = await ProfileService.updateUser(user, id);
    if (response.status === 201) {
      store.dispatch(Action.setUserData(response.data));
    }
  }

}

export default new ProfileController();
