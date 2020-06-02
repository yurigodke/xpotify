import React from "react";

import { withRouter } from "react-router";

const CodeProcessor = ({ history }) => {
  const paramsString = location.search;
  const searchParams = new URLSearchParams(paramsString);

  const code = searchParams.get("code");

  if (code) {
    const authUrl = "https://accounts.spotify.com/api/token";
    const authParams = {
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000/getToken"
    };

    const queryParams = new URLSearchParams(authParams).toString();

    console.log(authUrl + "?" + queryParams);
    history.push("/");
  }

  return <div>a</div>;
};

export default withRouter(CodeProcessor);
