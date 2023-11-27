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

  searchDogs: function (
    dogBreeds: string[],
    minAge: string,
    maxAge: string,
    zip_code: string[]
  ) {
    const dogBreedsString = dogBreeds
      .map((breed) => `breeds=${encodeURIComponent(breed)}`)
      .join("&");
    const url = `${apiMainURL}${searchAPI}?ageMin=${minAge}&ageMax=${maxAge}${
      zip_code.length ? `&zipCodes=${zip_code}` : ""
    }${dogBreedsString ? `&${dogBreedsString}` : ""}&size=20`;

    console.log(url);

    return url;
  },

  fetchAllDogs: function () {
    // return `${apiMainURL}${searchAPI}&size=20`;
    return `${apiMainURL}${searchAPI}?&size=20`;
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
