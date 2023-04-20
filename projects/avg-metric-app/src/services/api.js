import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1/breeds",
});

export default api;