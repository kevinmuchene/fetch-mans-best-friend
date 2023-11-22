import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class DogService {
  static fetchBreed = () => {
    return defaultRestApi.get(APIs.fetchBreeds());
  };
}
