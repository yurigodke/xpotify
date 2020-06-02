class API {
  constructor(token = null, type = "Bearer") {
    this.baseUrl = "https://accounts.spotify.com/api";

    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    if (token) {
      if (type == "Bearer") {
        this.setBearerAuth(token);
      } else if (type == "Basic") {
        this.setBasicAuth(token);
      }
    }
  }

  setBearerAuth() {
    this.headers["Authorization"] = "Bearer " + token;
  }

  setBasicAuth(token) {
    this.headers["Authorization"] = "Basic " + token;
  }

  getBody(data) {
    const searchParams = new URLSearchParams(data);

    return searchParams;
  }

  async post(path, data = null) {
    const response = await fetch(this.baseUrl + path, {
      method: "POST",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: this.getBody(data)
    });

    const jsonResponse = await response.json();

    return {
      status: response.status,
      data: jsonResponse
    };
  }

  async put(path, data = null) {
    const response = await fetch(this.baseUrl + path, {
      method: "PUT",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    });

    const jsonResponse = await response.json();

    return {
      status: response.status,
      data: jsonResponse
    };
  }

  async get(path) {
    const response = await fetch(this.baseUrl + path, {
      method: "GET",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer"
    });

    const jsonResponse = await response.json();

    return {
      status: response.status,
      data: jsonResponse
    };
  }

  async delete(path) {
    const response = await fetch(this.baseUrl + path, {
      method: "DELETE",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer"
    });

    const jsonResponse = await response.json();

    return {
      status: response.status,
      data: jsonResponse
    };
  }
}

export default API;
