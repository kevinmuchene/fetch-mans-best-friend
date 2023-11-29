const apiMainURL = "https://frontend-take-home-service.fetch.com";
const authLogInService = "/auth/login";
const authLogOutService = "/auth/logout";
const fetchBreeds = "/dogs/breeds";
const searchAPI = "/dogs/search";
const fetchDogs = "/dogs";
const matchFavoriteDog = "/dogs/match";
const getLocationByZip = "/locations";

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

  searchDogs: function (url: string) {
    return `${apiMainURL}${searchAPI}${url}`;
  },

  fetchAllDogs: function (sort = "asc") {
    return `${apiMainURL}${searchAPI}?&size=20&sort=breed:${sort}`;
  },
  fetchDogs: function () {
    return `${apiMainURL}${fetchDogs}`;
  },
  fetchNextPageData: function (nextAPI: string) {
    return `${apiMainURL}${nextAPI}`;
  },
  matchFavoriteDog: function () {
    return `${apiMainURL}${matchFavoriteDog}`;
  },
  fetchLocationByZip: function () {
    return `${apiMainURL}${getLocationByZip}`;
  },
};

export default APIs;
