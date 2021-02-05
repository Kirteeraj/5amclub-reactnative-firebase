import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {log} from 'react-native-reanimated';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {AuthContext} from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

export function MainScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const { user } = React.useContext(UserContext);

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
    <View>
      <Heading>MainScreen</Heading>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EE9608',
  },
});
