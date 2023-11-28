import locationService from "../services/LocationService";

export default class LocationAction {
  static async fetchLocationByZip(data) {
    return locationService.fetchLocationByZip(data).then((res) => {
      return res.data || {};
    });
  }
}
