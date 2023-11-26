import dogService from "../services/DogService";

export default class DogAction {
  static async fetchBreed() {
    return dogService.fetchBreed().then((res) => {
      return res.data || {};
    });
  }

  static async searchDogs(
    dogBreedsString: [],
    minAge: number,
    maxAge: number,
    zip_code: string[]
  ) {
    return dogService
      .searchDogs(dogBreedsString, minAge, maxAge, zip_code)
      .then((res) => {
        return res.data || {};
      });
  }

  static async fetchDogs(data: string[]) {
    return dogService.fetchDogs(data).then((res) => {
      return res.data || {};
    });
  }

  static async fetchNextPageData(data: string) {
    return dogService.fetchNextPageData(data).then((res) => {
      return res.data || {};
    });
  }

  static async fetchFavoriteMatch(data: string[]) {
    return dogService.fetchFavoriteMatch(data).then((res) => {
      return res.data || {};
    });
  }
}
