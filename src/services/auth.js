import api from './apiConfig';

// export const loginUser = async loginData => {
//   const resp = await api.post('/dj-rest-auth/login/', loginData);
//   localStorage.setItem('authToken', resp.data.key);
//   api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
//   return resp.data.user;
// };

export const loginUser = async loginData => {
  try {
    const resp = await api.post('/dj-rest-auth/login/', loginData);
    localStorage.setItem('authToken', resp.data.key);
    api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
    return { is_error: false, data: resp.data.user };
  } catch (err) {
    console.log('PRINT ERROR DATA LOGIN', err.response);
    if (err.response) {
      return {
        is_error: err.isAxiosError,
        data: Array.from(Object.entries(err.response.data)),
      };
    } else {
      return {
        is_error: true,
        data: [['Custom Unknown Error', 'Server not responding']],
      };
    }
  }
};

export const registerUser = async registerData => {
  try {
    const resp = await api.post('/dj-rest-auth/registration/', registerData);
    localStorage.setItem('authToken', resp.data.key);
    api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
    return { is_error: false, data: resp.data.user };
  } catch (err) {
    console.log('PRINT ERROR DATA REGISTER', err.response);
    return {
      is_error: err.isAxiosError,
      data: Array.from(Object.entries(err.response.data)),
    };
  }
};

// TODO: move regular APIs out of the auth module and make sure to correct imports wherever affected
export const getBreeds = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    const resp = await api.get(`/breeds`);
    return resp.data;
  }
};

export const createPet = async petCreationData => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.post('/pets/', petCreationData);
    return resp.data;
  }
};

// TODO: In backend complete the getOwnerPet, think how will this affect flow when more than one pet
export const getPet = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.get('/pets/');
    console.log(resp);
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
