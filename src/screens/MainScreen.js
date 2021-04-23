import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {UserContext} from '../context/UserContext';
import auth from '@react-native-firebase/auth';
import {ImageFooter} from '../components/ImageFooter';
import LinearGradient from 'react-native-linear-gradient';
import {shadow} from 'react-native-paper';
import {PinMessage} from '../components/PinMessage';

const windowHeight = Dimensions.get('window').height;

export function MainScreen({navigation}) {
  const data = {
    link:
      'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/homeScreenPhotos%2Fwelcome-screeen.jpg?alt=media&token=ac838d69-a7de-4d96-b4be-68b5716f4d26',
    isQoute: true,
    qoute: 'The energy of mind is essence of life',
    author: '~Arsitotle',
    color: 'white',
    factor: 0.82,
  };

  // const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);
  const userData = user._user;
  // console.log(user.email);

  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <HeaderIconButton
  //         name={'log-out'}
  //         onPress={async () => {
  //           logout();
  //         }}
  //       />
  //     ),
  //     title: '',
  //   });
  // }, [navigation, logout]);

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: data.link}} style={styles.image} />
        <View style={[styles.qoute, {top: windowHeight * 0.6 * data.factor}]}>
          <Text style={{color: data.color}}>{data.qoute}</Text>
          <Text style={{color: data.color}}>{data.author}</Text>
        </View>
        <ImageFooter />
        <PinMessage />
        <PinMessage />
        <PinMessage />
        <PinMessage />
        <PinMessage />
        <PinMessage />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EE9608',
  },
  button: {
    marginTop: 30,
  },
  image: {
    height: windowHeight * 0.6,
    width: '100%',
  },
  middleware: {
    alignContent: 'center',
    width: '100%',
    height: 164,
    borderRadius: 13,
    marginTop: -10,
  },
  qoute: {
    position: 'absolute',
    color: 'white',
    marginHorizontal: 40,
  },
});
