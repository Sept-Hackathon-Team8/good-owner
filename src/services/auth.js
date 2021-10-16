import api from './apiConfig';

// export const loginUser = async loginData => {
//   const resp = await api.post('/dj-rest-auth/login/', loginData);
//   localStorage.setItem('authToken', resp.data.key);
//   api.defaults.headers.common.authorization = `Token ${resp.data.key}`;
//   return resp.data.user;
// };

export const loginUser = async loginData => {
  // TODO: Move line below to global auth wrapper when created
  try {
    const resp = await api.post('/dj-rest-auth/login/', loginData);
    return { is_error: false, data: resp.data };
  } catch (err) {
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
  // TODO: Move line below to global auth wrapper when created
  try {
    const resp = await api.post('/dj-rest-auth/registration/', registerData);
    return { is_error: false, data: resp.data };
  } catch (err) {
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
    return resp.data;
  }
};

export const updateJourney = async (journeyData, uuid) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.patch(`/journey/${uuid}`, journeyData);
    return resp.data;
  }
};

export const getTasks = async () => {
  const resp = await api.get('/units/');
  return resp.data;
};

export const getPetFeedback = async petID => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.post(`/pet/assessments/`, petID);
    return resp.data;
  }
};

export const postFeedback = async feedbackData => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.post(`/assessments/`, feedbackData);
    return resp.data;
  }
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

export const getStreak = async petData => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Token ${token}`;
    const resp = await api.post(`pet/get-streak`, petData);
    // TODO: Fix the server response
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
