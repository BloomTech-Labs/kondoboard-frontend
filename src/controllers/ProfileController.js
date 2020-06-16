import store from '../store';
import * as Action from '@state/actions';
import ProfileService from '@services/ProfileService';

class ProfileController {
  async addNewUser(first_name, last_name, email) {
    // const user = await ProfileService.addNewUser(first_name, last_name, email);
    await ProfileService.addNewUser(first_name, last_name, email);
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
