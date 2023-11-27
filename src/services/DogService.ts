import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class DogService {
  static fetchBreed = () => {
    return defaultRestApi.get(APIs.fetchBreeds());
  };
  static fetchAllDogs = () => {
    return defaultRestApi.get(APIs.fetchAllDogs());
  };

  static searchDogs = (
    dogBreedsString: string[],
    minAge: string,
    maxAge: string,
    zip_code: string[]
  ) => {
    return defaultRestApi.get(
      APIs.searchDogs(dogBreedsString, minAge, maxAge, zip_code)
    );
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
