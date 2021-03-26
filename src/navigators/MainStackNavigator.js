import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SetProfile} from '../screens/SetProfile';
import { SubgroupScreen } from '../screens/SubgroupScreen';
import { CampaignsScreen } from '../screens/CampaignsScreen';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerTintColor: '#EE9608'}}>
      <MainStack.Screen name={'main'} component={MainScreen} />
      <MainStack.Screen name={'profile'} component={ProfileScreen} />
      <MainStack.Screen name={'setprofile'} component={SetProfile} />
      <MainStack.Screen name={'subgroupscreen'} component={SubgroupScreen} />
      <MainStack.Screen name={'campaignscreen'} component={CampaignsScreen} />
    </MainStack.Navigator>
  );
}
