import axios from "axios";

const baseUrl = new URL('https://kondo-board-api.herokuapp.com/api')

class ProfileService {
    async addNewUser(user) {
        console.log('sending user data', user)
        const response = await axios.post(`${baseUrl}/users`, user);
        console.log('response from server', response)
        return response.data;
    }

}

export default new ProfileService();