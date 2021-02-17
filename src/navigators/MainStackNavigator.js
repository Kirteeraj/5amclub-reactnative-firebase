import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { MainScreen } from '../screens/MainScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SetProfile } from '../screens/SetProfile'
import { BASE_URL } from '../config';

const client = new ApolloClient({
  url:`${BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});



const MainStack = createStackNavigator();


export function MainStackNavigator() {
  return (
    <ApolloProvider client={client}>
      <MainStack.Navigator  screenOptions=
      {
        {headerTintColor:'#EE9608'}
      }>
          <MainStack.Screen name={'main'} component={MainScreen} />
          <MainStack.Screen name={'profile'} component={ProfileScreen} />
          <MainStack.Screen name={'setprofile'} component={SetProfile} />
      </MainStack.Navigator>
    </ApolloProvider>
  );
}