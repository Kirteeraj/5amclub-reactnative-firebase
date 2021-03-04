import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Heading} from '../components/Heading';
import {launchImageLibrary} from 'react-native-image-picker';
import {AvatarImage} from '../components/AvatarImage';
import avatarImage from '../assets/avatar.png';
import {IconButton} from '../components/IconButton';
import {InputWithTitle} from '../components/InputWithTitle';
import {FilledButton} from '../components/FilledButton';
import {setProfileData} from '../api/setProfileData';
import {Error} from '../components/Error';
import {Loading} from '../components/Loading';

const avatarImageUri = Image.resolveAssetSource(avatarImage).uri;

export function SetProfile() {
  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, [navigation]);

  //data variables
  const [filePath, setFilePath] = React.useState({uri: avatarImageUri});
  const [intro, setIntro] = React.useState(null);
  const [place, setPlace] = React.useState(null);
  const [waNumber, setWaNumber] = React.useState(null);
  const [wakeUpNumber, setWakeUpNumber] = React.useState(null);
  const [scribble, setScribble] = React.useState(null);

  //loaging and error handling
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  //config forlaunchImage Libarary
  var options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option',
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  var callBack = (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      setFilePath(response);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Heading style={styles.welcome}>Hey, Let Community know you !</Heading>
        <View style={{height: 160}}>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(options, callBack);
            }}>
            <AvatarImage style={styles.image} source={{uri: filePath.uri}} />
          </TouchableOpacity>
          <IconButton
            style={styles.icon}
            name={'open'}
            onPress={() => {
              launchImageLibrary(options, callBack);
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <Error error={error} />
          <InputWithTitle
            title={'Two words Intro'}
            placeholder={'(eg: Nature Lover)'}
            value={intro}
            onChangeText={setIntro}
          />
          <InputWithTitle
            title={'Your place'}
            placeholder={'(eg: Parvati, Pune)'}
            value={place}
            onChangeText={setPlace}
          />
          <InputWithTitle
            title={'WhatsApp Number'}
            placeholder={''}
            keyboardType={'number-pad'}
            value={waNumber}
            onChangeText={setWaNumber}
          />
          <InputWithTitle
            title={'Wakeup Number'}
            keyboardType={'number-pad'}
            value={wakeUpNumber}
            onChangeText={setWakeUpNumber}
          />
          <InputWithTitle
            style={{height: 70, paddingTop: 0}}
            title={'Scrrible space'}
            placeholder={'You can write anything here'}
            value={scribble}
            onChangeText={setScribble}
          />
          <FilledButton
            style={{marginTop: 6}}
            title="Done"
            onPress={async () => {
              try {
                setLoading(true);
                await setProfileData(
                  filePath,
                  intro,
                  place,
                  waNumber,
                  wakeUpNumber,
                  scribble,
                );
                navigation.navigate('main');
              } catch (e) {
                setError(e.response.data);
                setLoading(false);
              }
            }}
          />
        </View>
        <Loading loading={loading} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: '75%',
    fontSize: 100,
    fontWeight: '700',
  },
  welcome: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    fontStyle: 'italic',
    fontFamily: 'Rochester-Regular',
  },
  image: {
    marginTop: 10,
  },
  icon: {
    position: 'relative',
    left: 98,
    top: -38,
  },
});
