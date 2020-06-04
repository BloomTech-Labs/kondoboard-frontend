import store from '../store';
import * as Action from '@state/actions';
import LoginService from '@services/LoginService';

class LoginController {
  async userVerification(email) {
    const user = await LoginService.queryUser(email);
    store.dispatch(Action.setUserData(user));
    // @NOTE: I don't think this needs to be returned.  In the component that needs the user data it should be getting it with a selector.
    return user;
  }
}

export default new LoginController();
