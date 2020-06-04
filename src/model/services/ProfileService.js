import { axiosWithAuth } from '@helpers/utils/axiosWithAuth';

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
  async addNewUser(user) {
    const response = await axiosWithAuth().post(`${baseUrl}/users`, user);
    // @NOTE: since you need more than response.data in updateUser, just return response here to be consistant,
    // and in the controller you can grab the data.
    return response.data;
  }

  async updateUser(user, id) {
    const response = await axiosWithAuth().put(`${baseUrl}/users/${id}`, user);
    return response;
  }
}

export default new ProfileService();
