import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screens/MainScreen';
import {SubgroupScreen} from '../screens/SubgroupScreen';
import {CampaignsScreen} from '../screens/CampaignsScreen';
import Icon from 'react-native-ionicons';
import {SettingsScreen} from '../screens/SettingsScreen';

const MainStack = createBottomTabNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName={'campaignscreen'}
      tabBarOptions={{
        activeTintColor: '#EE9608',
        showLabel: false,
      }}
      backBehavior={'initialRoute'}>
      <MainStack.Screen
        name={'main'}
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <MainStack.Screen name={'profile'} component={ProfileScreen} /> */}
      <MainStack.Screen
        name={'subgroupscreen'}
        component={SubgroupScreen}
        options={{
          tabBarLabel: 'Subgroup',
          tabBarIcon: ({color, size}) => (
            <Icon name="people" color={color} size={size} />
          ),
        }}
      />
      <MainStack.Screen
        name={'campaignscreen'}
        component={CampaignsScreen}
        options={{
          tabBarLabel: 'Campaigns',
          tabBarIcon: ({color, size}) => (
            <Icon name="flag" color={color} size={size} />
          ),
        }}
      />
      <MainStack.Screen
        name={'settings'}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
      {/* Note : Other Scrrens which we dont want in
      Bottome tab Bar, are declared in SubStackNavigator and
      can  be aceesed using dangeroslygetparent (.push or .pop) 
      method of navigation object*/}
    </MainStack.Navigator>
  );
}
