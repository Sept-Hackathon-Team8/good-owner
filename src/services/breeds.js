import api from "./apiConfig";

export const getBreeds = async () => {
  const resp = await api.get(`/breeds`);
  return resp.data;
};