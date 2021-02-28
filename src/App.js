import React from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {lightTheme} from './themes/light';
import {AuthContext} from './context/AuthContext';
import {MainStackNavigator} from './navigators/MainStackNavigator';
import {useAuth} from './hooks/useAuth';
import {UserContext} from './context/UserContext';
import {SplashScreen} from './screens/SplashScreen';
import react from 'react';

const RootStack = createStackNavigator();

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function renderScreens() {
    if (initializing) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    return user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    );
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
