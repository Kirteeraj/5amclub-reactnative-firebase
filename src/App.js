import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';

import {
  createStackNavigator,
} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {MainStackNavigator} from './navigators/MainStackNavigator';
import {UserContext} from './context/UserContext';
import {SplashScreen} from './screens/SplashScreen';
import {checkIfProfileExist} from './utils/checkIfProfileExist';
import {OnboardingStackNavigator} from './navigators/OnboardingStackNavigator';

const RootStack = createStackNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const [userProfile, setUserProfile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if (auth().currentUser) {
      const subscriber1 = firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then((data) => {
          console.log(data._data);
          setUserProfile(data._data);
        });
    }
    return subscriber; // unsubscribe on unmount
  }, [checkIfProfileExist]);

  function renderScreens() {
    if (initializing) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }

    if (user) {
      // console.log(userProfile);
      if (userProfile) {
        return (
          <RootStack.Screen name={'MainStack'}>
            {() => (
              <UserContext.Provider value={user}>
                <MainStackNavigator />
              </UserContext.Provider>
            )}
          </RootStack.Screen>
        );
      } else {
        return (
          <>
            <RootStack.Screen name={'OnboardingStack'}>
              {() => <OnboardingStackNavigator />}
            </RootStack.Screen>
            <RootStack.Screen name={'MainStack'}>
              {() => (
                <UserContext.Provider value={user}>
                  <MainStackNavigator />
                </UserContext.Provider>
              )}
            </RootStack.Screen>
          </>
        );
      }
    } else {
      return (
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      );
    }
  }

  return (
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {renderScreens()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
