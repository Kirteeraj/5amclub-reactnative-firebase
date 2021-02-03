import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import axios from 'axios';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './context/AuthContext';
import {BASE_URL} from './config';
import { createAction } from './util/createAction';

const FormData = require('form-data');
const RootStack = createStackNavigator();

let axiosConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export default function App() {

  const [state, dispatch] = React.useReducer((state,action)=> {
    switch(action.type){
      case 'SET_USER':
        return {
          ...state,
          user:{...action.payload}, 
        };
      default:
        return state;
    }
  },{
    user: undefined,
  });


  const auth = React.useMemo(() => ({
    login: async (email, password) => {
      const form = new FormData();
      form.append('identifier', email);
      form.append('password', password);

      const {data} =await axios
        .post(`${BASE_URL}/auth/local`, form, axiosConfig);
        
        const user = {
          email: data.user.email,
          token: data.jwt
        }
        dispatch(createAction('SET_USER',user));
      
    },
    logout: () => {
      console.log('logout');
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
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
