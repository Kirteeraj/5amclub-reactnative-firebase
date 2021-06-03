import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {MainStackNavigator} from './navigators/MainStackNavigator';
import {UserContext} from './context/UserContext';
import {SplashScreen} from './screens/SplashScreen';
import {checkIfProfileExist} from './utils/checkIfProfileExist';
import {OnboardingStackNavigator} from './navigators/OnboardingStackNavigator';
import {SubStackNavigator} from './navigators/SubStackNavigator';
import {CampProvider} from './context/CampContext';
import {requestUserPermission} from './api/messaging'; // for ios only
import messaging from '@react-native-firebase/messaging';
import useListenDataUpdate from './hooks/useListenDataUpdate';

const RootStack = createStackNavigator();
requestUserPermission();
messaging()
  .subscribeToTopic('weather')
  .then(() => console.log('Subscribed to topic!'));

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const [userProfile, setUserProfile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (auth().currentUser) {
      console.log('yo');
      setLoading(true);
      const subscriber1 = firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then((data) => {
          console.log(data._data);
          setUserProfile(data._data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber();
    }; // unsubscribe on unmount
  }, [checkIfProfileExist]);

  function renderScreens() {
    if (initializing) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    if (loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    if (user) {
      if (userProfile) {
        return (
          <>
            <RootStack.Screen name={'MainStack'}>
              {() => (
                <UserContext.Provider
                  value={{user, userProfile, setUserProfile}}>
                  <CampProvider>
                    <MainStackNavigator />
                  </CampProvider>
                </UserContext.Provider>
              )}
            </RootStack.Screen>
            <RootStack.Screen name={'SubStack'}>
              {() => (
                <UserContext.Provider
                  value={{user, userProfile, setUserProfile}}>
                  <SubStackNavigator />
                </UserContext.Provider>
              )}
            </RootStack.Screen>
          </>
        );
      } else {
        return (
          <>
            <RootStack.Screen name={'OnboardingStack'}>
              {() => <OnboardingStackNavigator />}
            </RootStack.Screen>
            <RootStack.Screen name={'MainStack'}>
              {() => (
                <UserContext.Provider value={{user, userProfile}}>
                  <MainStackNavigator />
                </UserContext.Provider>
              )}
            </RootStack.Screen>
          </>
        );
      }
    } else {
      console.log('Inside this');
      return (
        <RootStack.Screen name={'AuthStack'}>
          {() => <AuthStackNavigator />}
        </RootStack.Screen>
      );
    }
  }

  return (
    <>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
