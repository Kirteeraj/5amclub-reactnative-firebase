import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CampaignsScreen} from '../screens/CampaignsScreen';
import {SubgroupScreen} from '../screens/SubgroupScreen';

const MainBottomNavigatorObject = createBottomTabNavigator();

export function MainBottomNavigator() {
  return (
    <MainBottomNavigatorObject.Navigator>
      <MainBottomNavigatorObject.Screen
        name="Home"
        component={SubgroupScreen}
      />
      <MainBottomNavigatorObject.Screen
        name="Settings"
        component={CampaignsScreen}
      />
    </MainBottomNavigatorObject.Navigator>
  );
}
