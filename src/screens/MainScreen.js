import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {AuthContext} from '../context/AuthContext';
import {UserContext} from '../context/UserContext';


export function MainScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);

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
      <Text>{user.email}</Text>
      <Button style={styles.button} title={'More Info'} onPress={()=>{
        navigation.navigate('profile');
      }}/>
      <Button style={styles.button} title={'SetProfile'} onPress={()=>{
        navigation.navigate('setprofile');
      }}/>
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
  button:{
    marginTop:30,
  }
});
