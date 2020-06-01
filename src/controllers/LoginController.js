import store from '../store';
import * as Action from '@state/actions';
import LoginService from '@services/LoginService';

class LoginController {
    async userVerification() {
        const user = await LoginService.queryUser();
        store.dispatch(Action.setUserEmail());
    }

}

export default new LoginController();