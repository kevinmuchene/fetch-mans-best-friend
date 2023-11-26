import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class LocationService {
  static fetchLocationByZip = (data) => {
    return defaultRestApi.post(APIs.fetchLocationByZip(), data);
  };
}
