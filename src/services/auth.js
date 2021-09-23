import api from './apiConfig';

export const loginUser = async loginData => {
  const resp = await api.post('/dj-rest-auth/login/', loginData);
  localStorage.setItem('authToken', resp.data.key);
  api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
  return resp.data.user;
};

export const registerUser = async registerData => {
  const resp = await api.post('/dj-rest-auth/registration/', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Token ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
