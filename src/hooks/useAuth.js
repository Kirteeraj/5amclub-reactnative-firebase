import React from 'react';
import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import axios from 'axios';
import SecureStorage from 'react-native-secure-storage';
import {sleep} from '../utils/sleep';

const FormData = require('form-data');

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
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
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );

  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        const postdata = {
          email: email,
          password: password,
        };
        const {data} = await axios.post(
          `${BASE_URL}/auth/login`,
          postdata,
          axiosConfig,
        );

        const user = {
          email: data.email,
          token: data.jwt,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));

        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        const data = {
          name: email,
          email: email,
          password: password,
        };
        await axios.post(`${BASE_URL}/auth/register`, data, axiosConfig);
      },
    }),
    [],
  );

  React.useEffect(() => {
    sleep(1500).then(() => {
      SecureStorage.getItem('user').then((user) => {
        user = JSON.parse(user);
        console.log('user', user);
        if (user) {
          dispatch(createAction('SET_USER', user));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);

  return {auth, state};
}
