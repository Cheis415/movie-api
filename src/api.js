import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// https://superheroapi.com/api/

class MovieApi {

  // the token for interactive with the API will be stored here.
  token;

  request(endpoint, data = {}, method = "get") {
    console.log("ENDPOINT:", endpoint);
    console.log("DATA:", data);
    console.log("METHOD:", method);

    const url = `http://localhost:3001/${endpoint}`;
    // const headers = { Authorization: `Bearer ${MovieApi.token}` };
    const params = (method === "get")
      ? { format: 'json', ...data }
      : {};

    try {
      console.log("PARAMS--->", params)
      console.log("URL-->", url)
     return axios.get(url, { params }).then(resp => { console.log('HEEEELOLOOO',resp); return resp });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  getMovie(name) {
    let res = this.request("api", { name }).then(res => console.log('RERERERERESSS',res));
    console.log('RERERERERESSS',this.request)
    return res;
  }
}


export default MovieApi;