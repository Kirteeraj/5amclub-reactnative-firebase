import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton';
import {Heading} from '../components/Heading';
import {UserContext} from '../context/UserContext';
import auth from '@react-native-firebase/auth';
import {StickyFooter} from '../components/StickyFooter';
import LinearGradient from 'react-native-linear-gradient';
import {shadow} from 'react-native-paper';

export function MainScreen({navigation}) {
  const data = {
    link:
      'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/homeScreenPhotos%2Fwelcome-screeen.jpg?alt=media&token=ac838d69-a7de-4d96-b4be-68b5716f4d26',
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
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentInsetAdjustmentBehavior="never" style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={{uri: data.link}} style={styles.image} />
          {/* <LinearGradient
            colors={[
              'rgba(rgba(	238, 150, 8,1)',
              'rgba(rgba(	238, 150, 8,0.9)',
              'rgba(	238, 150, 8,0.1)',
              'rgba(	238, 150, 8,0)',
            ]}
            style={styles.middleware}>
            <Text
              style={{fontSize: 50, fontWeight: '500'}}
              allowFontScaling={false}>
              5:10
            </Text>
          </LinearGradient> */}
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
          <Button
            style={styles.button}
            title={'Subgroup'}
            onPress={() => {
              navigation.navigate('subgroupscreen');
            }}
          />
          <Button
            style={styles.button}
            title={'Campaigns'}
            onPress={() => {
              navigation.navigate('campaignscreen');
            }}
          />
        </View>
        <Heading>MainScreen</Heading>
        <Heading>MainScreen</Heading>
        <Heading>MainScreen</Heading>

        {/* <StickyFooter /> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: 700,
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
    height: '65%',
    width: '100%',
  },
  middleware: {
    alignContent: 'center',
    width: '100%',
    marginTop: 0,
    height: 164,
    borderRadius: 13,
    marginTop: -10,
  },
});
