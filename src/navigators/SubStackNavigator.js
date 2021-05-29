/*    Note : Other Scrrens which we dont want in
      Bottome tab Bar, are declared in SubStackNavigator and
      can  be aceesed using dangeroslygetparent (.push or .pop)
      method of navigation object
*/
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditProfile} from '../screens/EditProfile';

const SubStack = createStackNavigator();

export function SubStackNavigator() {
  return (
    <SubStack.Navigator headerMode={false} mode={'card'}>
      <SubStack.Screen
        name={'editprofile'}
        component={EditProfile}
        options={{}}
      />
    </SubStack.Navigator>
  );
}
