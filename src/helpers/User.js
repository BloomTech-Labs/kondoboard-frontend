class User {
  static formatUser(userData) {
    return {
      first_name: userData.first_name || '',
      last_name: userData.last_name || '',
      email: userData.email || '',
      id: userData.id || '',
      locations: userData.locations || null,
      profile_image: userData.profile_image || null,
      remote: userData.remote || null,
      skills: userData.skills || null,
      user_track: userData.user_track || null,
    };
  }
}

export default User;
