import login from "../actions/login";

class Utils {
  constructor({ dispatch, reduxState }) {
    this.dispatch = dispatch;
    this.reduxState = reduxState;
  }

  refreshCheck(response, errorAction, refreshedAction) {
    if (
      this.reduxState.login.tokenData &&
      this.reduxState.login.tokenData.refresh_token &&
      response.data.error.message === "The access token expired"
    ) {
      this.dispatch(login.refreshAccessToken(refreshedAction, errorAction));
    } else {
      this.dispatch(errorAction);
    }
  }
}

export default Utils;
