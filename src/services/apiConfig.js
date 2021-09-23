import axios from 'axios';

// const baseURL = 'https://sleepy-meadow-76573.herokuapp.com/api';
const baseURL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
