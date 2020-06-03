import store from '../store';
import * as Action from '@state/actions';
import LoginService from '@services/LoginService';

class LoginController {
    async userVerification(email) {
        const user = await LoginService.queryUser(email);
        store.dispatch(Action.setUserData(user))
        return user;
    }

}

export default new LoginController();