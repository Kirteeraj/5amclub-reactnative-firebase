import React from 'react';
import {BASE_URL} from '../config';
import { createAction } from '../utils/createAction';
import axios from 'axios';


const FormData = require('form-data');

let axiosConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
    },
  );

  const auth = React.useMemo(() => ({
    login: async (email, password) => {
      const form = new FormData();
      form.append('identifier', email);
      form.append('password', password);

      const {data} = await axios.post(
        `${BASE_URL}/auth/local`,
        form,
        axiosConfig,
      );

      const user = {
        email: data.user.email,
        token: data.jwt,
      };
      dispatch(createAction('SET_USER', user));
    },
    logout: async () => {
      await dispatch(createAction('REMOVE_USER'));
      navig;
    },
    register: async (email, password) => {
      const form = new FormData();
      form.append('username', email);
      form.append('email', email);
      form.append('password', password);

      await axios.post(`${BASE_URL}/auth/local/register`, form, axiosConfig);
    },
  }));

  console.log(state);
  return {auth, state};
}
