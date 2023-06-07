export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
