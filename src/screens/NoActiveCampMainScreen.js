import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import {UserContext} from '../context/UserContext';
import {ImageFooter} from '../components/ImageFooter';
import {PinMessage} from '../components/PinMessage';
import Sound from 'react-native-sound';
import music from '../assets/music.mp3';
import useListenDataUpdate from '../hooks/useListenDataUpdate';

const windowHeight = Dimensions.get('window').height;

const backgroundSound = new Sound(music, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export function NoACtiveCampMainScreen({navigation}) {
  const [isMute, setIsMute] = React.useState(false);

  React.useEffect(() => {
    try {
      console.log('Start');
      backgroundSound.setNumberOfLoops(-1);
      backgroundSound.play();
    } catch (err) {
      console.log('sound', err);
    }
    return function stopSound() {
      console.log('Stop');
      backgroundSound.pause();
    };
  }, []);

  const data = {
    link:
      'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/homeScreenPhotos%2Fwelcome-screeen.jpg?alt=media&token=ac838d69-a7de-4d96-b4be-68b5716f4d26',
    isQoute: true,
    qoute: 'The energy of mind is essence of life',
    author: '~Arsitotle',
    color: 'white',
    factor: 0.82,
  };

  const user = React.useContext(UserContext);
  const userData = user._user;

  //   const {campData, refresh} = React.useContext(CampContext);
  //   // console.log(campData.timeline);
  //   //listen to update
  //   useListenDataUpdate(refresh);

  //   var timelineData = campData.timeline;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: data.link}} style={styles.image} />
        <View style={[styles.qoute, {top: windowHeight * 0.6 * data.factor}]}>
          <Text allowFontScaling={false} style={{color: data.color}}>
            {data.qoute}
          </Text>
          <Text allowFontScaling={false} style={{color: data.color}}>
            {data.author}
          </Text>
        </View>
        <View
          style={{position: 'absolute', top: windowHeight * 0.535, right: 15}}>
          <Button
            title={isMute ? 'unmute' : 'mute'}
            color={'rgba(52, 52, 52, 0.8)'}
            onPress={() => {
              if (isMute) {
                console.log('playing', isMute);
                setIsMute(false);
                backgroundSound.play((success) => {});
              } else {
                console.log('pausing', isMute);
                setIsMute(true);
                backgroundSound.pause((success) => {});
              }
            }}
          />
        </View>
        <ImageFooter
          meetLink={'https://www.kirteeraj.rocks'}
          campName={'Welcome'}
        />
        {/* <View style={styles.timeline}>
          {timelineData
            .slice(0)
            .reverse()
            .map((data, index) => {
              return (
                <PinMessage
                  key={index}
                  date={data.date}
                  title={data.title}
                  message={data.message}
                />
              );
            })}
        </View> */}
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
  timeline: {
    marginTop: 20,
    marginBottom: 20,
  },
});
