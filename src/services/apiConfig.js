import axios from "axios";

const baseURL = "https://sleepy-meadow-76573.herokuapp.com/";

const api = axios.create({
  baseURL: baseURL
});

export default api;