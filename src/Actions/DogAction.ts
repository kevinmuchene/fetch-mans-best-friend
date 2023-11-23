import dogService from "../services/DogService";

export default class DogAction {
  static async fetchBreed() {
    return dogService.fetchBreed().then((res) => {
      return res.data || {};
    });
  }
  static async searchDogs(dogBreedsString, minAge, maxAge, zip_code) {
    return dogService
      .searchDogs(dogBreedsString, minAge, maxAge, zip_code)
      .then((res) => {
        return res.data || {};
      });
  }

  static async fetchDogs(data) {
    return dogService.fetchDogs(data).then((res) => {
      return res.data || {};
    });
  }

  static async fetchNextPageData(data) {
    return dogService.fetchNextPageData(data).then((res) => {
      return res.data || {};
    });
  }
}
