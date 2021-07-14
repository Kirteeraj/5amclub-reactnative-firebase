import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';
import {lightTheme} from '../themes/light';
import {OutlineButton} from './OutlineButton';
import {TextButton} from './TextButton';

export default function PosterBox({navigation}) {
  return (
    <View style={styles.comicContainer}>
      <Text
        style={{
          color: lightTheme.colors.orange,
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        5 am Club
      </Text>
      {/* Logos and info */}
      <ImageBackground
        style={styles.innerContainer}
        source={require('../assets/PosterBoxBg.png')}
        imageStyle={{borderRadius: 8}}>
        <View style={styles.innerRow}>
          <Image
            source={require('./../assets/Days.png')}
            style={styles.innerImage}
          />
          <View style={{alignSelf: 'baseline'}}>
            <Text style={styles.innerText}>
              Win the habbit of waking up early, in 21 Days
            </Text>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{alignSelf: 'baseline'}}>
            <Text style={[styles.innerText, {textAlign: 'left'}]}>
              With 21 Power lessons at 5AM
            </Text>
          </View>
          <Image
            source={require('./../assets/clam.png')}
            style={styles.innerImage}
          />
        </View>
        <View style={styles.innerRow}>
          <Image
            source={require('./../assets/community.png')}
            style={styles.innerImage}
          />
          <View style={{alignSelf: 'baseline'}}>
            <Text style={styles.innerText}>
              Along With Amazing Commuinty for 15 mins
            </Text>
          </View>
        </View>
        <TextButton
          title={'Enroll Now'}
          onPress={() => {
            navigation.navigate({name: 'campaignscreen'});
          }}
        />
        {/* <View
          style={{
            width: '100%',
            flexDirection: 'row-reverse',
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}>
          <OutlineButton
            name="Enroll Now"
            color={lightTheme.colors.orange}
            style={{width: 130}}
          />
        </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  comicContainer: {
    marginVertical: 20,
    width: '90%',
    // backgroundColor: '#F4EEEE',
  },
  innerContainer: {
    // marginHorizontal: '8%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: lightTheme.colors.orange,
  },
  innerText: {
    marginTop: 15,
    padding: 2,
    fontSize: 15,
    alignContent: 'center',
    textAlign: 'right',
    maxWidth: 157,
    color: '#EA81A7',
    fontWeight: 'bold',
    // backgroundColor: 'pink',
  },
  innerImage: {
    width: 95,
    height: 120,
    // backgroundColor: 'pink',
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
});
