import api from './apiConfig';

export const getBreeds = async () => {
  const token = localStorage.getItem('authToken');
  console.log('THIS IS GET BREEDS TOKEN', token);
  if (token) {
    const resp = await api.get(`/breeds`);
    return resp.data;
  }
};
