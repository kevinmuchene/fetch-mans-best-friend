import authService from "../services/AuthService";

export default class AuthActions {
  static async signin(data: {}) {
    return authService.signin(data).then((res) => {
      return res.data || {};
    });
  }
  static async signout() {
    return authService.signout().then((res) => {
      return res.data || {};
    });
  }
}
