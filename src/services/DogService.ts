import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class DogService {
  static fetchBreed = () => {
    return defaultRestApi.get(APIs.fetchBreeds());
  };

  static searchDogs = (dogBreedsString, minAge, maxAge, zip_code) => {
    return defaultRestApi.get(
      APIs.searchDogs(dogBreedsString, minAge, maxAge, zip_code)
    );
  };

  static fetchDogs = (data) => {
    return defaultRestApi.post(APIs.fetchDogs(), data);
  };
}
