import locationService from "../services/LocationService";

export default class LocationAction {
  static async fetchLocationByZip(data: string[]) {
    return locationService.fetchLocationByZip(data).then((res) => {
      return res.data || {};
    });
  }
}
