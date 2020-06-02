import { LOADING, SETACCESSTOKEN, SETACCESSTOKENERROR } from "../constants.js";
import API from "../api";

const getAccessToken = code => async (dispatch, getState) => {
  dispatch({ type: LOADING });

  const clientId = "572e7b660de04c5abadd226e419843e2";
  const secretId = "da689b5c64b14653a9fd6285448f5b8a"; //ideal ficar server side!

  const secretIdBase64 = new Buffer(clientId + ":" + secretId).toString(
    "base64"
  );

  const api = new API(secretIdBase64, "Basic");

  const loginResponse = await api.post("/token", {
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://localhost:3000/login"
  });

  if (loginResponse.status === 200) {
    dispatch({
      type: SETACCESSTOKEN,
      payload: loginResponse.data
    });
  } else {
    dispatch({
      type: SETACCESSTOKENERROR,
      payload: null
    });
  }
};

const forceToken = token => (dispatch, getState) => {
  dispatch({
    type: SETACCESSTOKEN,
    payload: {
      access_token: token
    }
  });
};

const clearToken = () => (dispatch, getState) => {
  dispatch({
    type: SETACCESSTOKEN,
    payload: {}
  });
};

export default {
  getAccessToken,
  forceToken,
  clearToken
};
