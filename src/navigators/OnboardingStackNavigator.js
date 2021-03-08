import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Onboarding } from '../screens/Onboarding';


const OnboardingStack = createStackNavigator();

export function OnboardingStackNavigator(){
    return(
    <OnboardingStack.Navigator screenOptions={{headerTintColor: '#EE9608'}}>
        <OnboardingStack.Screen name={'onboarding'} component={Onboarding}/>
    </OnboardingStack.Navigator>
    );
}