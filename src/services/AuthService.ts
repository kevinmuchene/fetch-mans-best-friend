import APIs from "../common/API";
import defaultRestApi from "../common/RestAPIInstnace";

export default class AuthService {
  static signin = (data) => {
    return defaultRestApi.post(APIs.getAuthCookie(), data);
  };
  static signout = () => {
    return defaultRestApi.post(APIs.logoutAPI());
  };
}
