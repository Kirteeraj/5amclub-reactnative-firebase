import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from '../screens/MainScreen';



const MainStack = createStackNavigator();


export function MainStackNavigator() {
  return (
      <MainStack.Navigator>
          <MainStack.Screen name={'main'} component={MainScreen} />
      </MainStack.Navigator>
  );
}