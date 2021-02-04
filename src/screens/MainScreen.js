import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { log } from 'react-native-reanimated';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {AuthContext} from '../context/AuthContext';

export function MainScreen({navigation}) {
  const {
    auth: {logout},
    user,
  } = React.useContext(AuthContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton name={'log-out'} onPress={async () =>{logout();}} />
      ),
      title: '',
    });
  }, [navigation,logout]);

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
