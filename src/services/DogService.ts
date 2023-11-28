import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class DogService {
  static fetchBreed = () => {
    return defaultRestApi.get(APIs.fetchBreeds());
  };
  static fetchAllDogs = (sort: string) => {
    return defaultRestApi.get(APIs.fetchAllDogs(sort));
  };

  static searchDogs = (url: string) => {
    return defaultRestApi.get(APIs.searchDogs(url));
  };

  static fetchDogs = (data: []) => {
    return defaultRestApi.post(APIs.fetchDogs(), data);
  };

  static fetchNextPageData = (nextAPI: string) => {
    return defaultRestApi.get(APIs.fetchNextPageData(nextAPI));
  };

  static fetchFavoriteMatch = (data: []) => {
    return defaultRestApi.post(APIs.matchFavoriteDog(), data);
  };
}
