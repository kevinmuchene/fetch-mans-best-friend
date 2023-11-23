const apiMainURL = "https://frontend-take-home-service.fetch.com";

const authLogInService = "/auth/login";
const authLogOutService = "/auth/logout";
const fetchBreeds = "/dogs/breeds";
const searchAPI = "/dogs/search";
const fetchDogs = "/dogs";

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
  searchDogs: function (dogBreedsString, minAge, maxAge, zip_code) {
    return `${apiMainURL}${searchAPI}?breeds=${dogBreedsString}&minAge=${minAge}&maxAge=${maxAge}&zip_code=${zip_code}`;
  },
  fetchDogs: function () {
    return `${apiMainURL}${fetchDogs}`;
  },
};

export default APIs;
// &minAge=${minAge}&maxAge=${maxAge}&zipcode=${zipcode}`
