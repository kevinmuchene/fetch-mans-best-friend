const apiMainURL = "https://frontend-take-home-service.fetch.com";

const authLogInService = "/auth/login";
const authLogOutService = "/auth/logout";

const APIs = {
  getAuthCookie: function () {
    return `${apiMainURL}${authLogInService}`;
  },
  logoutAPI: function () {
    return `${apiMainURL}${authLogOutService}`;
  },
};

export default APIs;
