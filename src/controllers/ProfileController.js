import store from '../store';
import * as Action from '@state/actions';
import ProfileService from '@services/ProfileService';


class ProfileController {
    async addNewUser(first_name, last_nambe, email) {
        const user = await ProfileService.addNewUser(first_name, last_nambe, email);
        store.dispatch(Action.setUserData({}));
    }


}

export default new ProfileController();