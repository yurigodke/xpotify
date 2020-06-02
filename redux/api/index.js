class API {
  constructor(token = null) {
    this.token = token;
    this.baseUrl = "https://accounts.spotify.com/api/";

    this.headers = {
      "Content-Type": "application/json"
    };

    if (this.token) {
      this.setBearerAuth();
    }
  }

  setBearerAuth() {
    this.headers["Authorization"] = "Bearer " + this.token;
  }

  async post(path, data = null) {
    const response = await fetch(this.baseUrl + path, {
      method: "POST",
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
