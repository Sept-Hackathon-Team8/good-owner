import api from './apiConfig';

export const getBreeds = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    const resp = await api.get(`/breeds`);
    return resp.data;
  }
};
