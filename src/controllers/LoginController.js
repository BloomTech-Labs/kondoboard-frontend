import store from '../store';
import * as Action from '@state/actions';
import LoginService from '@services/LoginService';

class LoginController {
<<<<<<< HEAD
    async userVerification() {
        const user = await LoginService.queryUser();
        store.dispatch(Action.setUserEmail());
=======
    async userVerification(email) {
        const user = await LoginService.queryUser(email);
        store.dispatch(Action.setUserData(user))
        return user;
>>>>>>> 24210f323c0740ff6f3e24f54779d782633fdf7a
    }

}

export default new LoginController();