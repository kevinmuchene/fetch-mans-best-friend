const apiMainURL = "https://frontend-take-home-service.fetch.com";

const authLogInService = "/auth/login";
const authLogOutService = "/auth/logout";
const fetchBreeds = "/dogs/breeds";
const searchAPI = "/dogs/search";

const APIs = {
  getAuthCookie: function () {
    return `${apiMainURL}${authLogInService}`;
  },
  logoutAPI: function () {
    return `${apiMainURL}${authLogOutService}`;
  },
  fetchBreeds: function () {
    return `${apiMainURL}${fetchBreeds}`;
  },
  searchDogs: function () {
    return `${apiMainURL}${searchAPI}`;
  },
};

export default APIs;
