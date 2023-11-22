import dogService from "../services/DogService";

export default class DogAction {
  static async fetchBreed() {
    return dogService.fetchBreed().then((res) => {
      return res.data || {};
    });
  }
}
