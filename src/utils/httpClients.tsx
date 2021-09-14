import axios from "axios";

const BaseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

export default api;
