import api from './apiConfig';

export const loginUser = async loginData => {
  const resp = await api.post('/dj-rest-auth/login/', loginData);
  localStorage.setItem('authToken', resp.data.key);
  api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
  return resp.data.user;
};

export const registerUser = async registerData => {
  try {
    const resp = await api.post('/dj-rest-auth/registration/', registerData);
    localStorage.setItem('authToken', resp.data.key);
    api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
    return { is_error: false, data: resp.data.user };
  } catch (err) {
    console.log(err.response);
    return {
      is_error: err.isAxiosError,
      data: Array.from(Object.entries(err.response.data)),
    };
  }
};

export const getBreeds = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    const resp = await api.get(`/breeds`);
    return resp.data;
  }
};

export const createPet = async petCreationData => {
  console.log('AAAAA INSIDE CREATE PET');
  const token = localStorage.getItem('authToken');
  console.log('THIS IS GET BREEDS TOKEN', token);
  console.log('THIS IS GET PET DATA', petCreationData);
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.post('/pets/', petCreationData);
    console.log(resp.data);
    return resp.data;
  }
};

// export const verifyUser = async () => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     api.defaults.headers.common.authorization = `Token ${token}`;
//     const resp = await api.get('/auth/verify');
//     return resp.data;
//   }
//   return null;
// };

// export const removeToken = () => {
//   api.defaults.headers.common.authorization = null;
// };
