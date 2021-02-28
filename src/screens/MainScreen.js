import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {UserContext} from '../context/UserContext';
import {logout} from '../api/emailPasswordLogin';
import auth from '@react-native-firebase/auth';

export function MainScreen({navigation}) {
  // const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);
  const userData = user._user;
  // console.log(user.email);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton
          name={'log-out'}
          onPress={async () => {
            logout();
          }}
        />
      ),
      title: '',
    });
  }, [navigation, logout]);

  return (
    <View style={styles.container}>
      <Heading>MainScreen</Heading>
      <Text>{userData.email}</Text>
      <Button
        style={styles.button}
        title={'More Info'}
        onPress={() => {
          navigation.navigate('profile');
        }}
      />
      <Button
        style={styles.button}
        title={'SetProfile'}
        onPress={() => {
          navigation.navigate('setprofile');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EE9608',
  },
  button: {
    marginTop: 30,
  },
});
