import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {AvatarImage} from './AvatarImage';
import messageBackground from '../assets/message-background7.png';

var messageBackgroundUri = Image.resolveAssetSource(messageBackground).uri;

var facilatorImage =
  'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/profilephotos%2F757sHgEM0gMBnawub0vLdeFepFk2?alt=media&token=ec823ac4-c763-40da-afc0-eb80e59cfdf0';

export function PinMessage() {
  var data = {
    date: 'May 20',
    title: 'Gratitude',
    message: 'The Energy of mind is essence of life, the word limit is up to',
  };

  return (
    <View style={styles.topcontainer}>
      <AvatarImage
        size={25}
        source={{uri: facilatorImage}}
        style={styles.avatar}
      />
      <View style={styles.container}>
        <ImageBackground
          source={{uri: messageBackgroundUri}}
          style={styles.image}
          imageStyle={{borderRadius: 20, borderTopLeftRadius: 0}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
            }}>
            {/* <AvatarImage
          size={50}
          source={{uri: facilatorImage}}
          style={styles.avatar}
        /> */}
            <View style={{marginTop: 10, marginLeft: 5, width: '85%'}}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.message}>{data.message}</Text>
            </View>
          </View>
          <Text style={styles.date} allowFontScaling={false}>
            {data.date}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    // padding: 5,
    borderColor: '#EA81A7',
    borderWidth: 1.5,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    marginHorizontal: 8,
    // height:
  },
  date: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 3,
    color: '#EA81A7',
    fontWeight: 'bold',
  },
  title: {
    color: '#EA81A7',
    fontWeight: 'bold',
  },
  message: {
    flex: 1,
    flexWrap: 'wrap',
    margin: 5,
    marginLeft: 0,
    marginTop: 0,
    textAlign: 'left',
    fontWeight: '600',
    height: 45,
    fontFamily: 'sans-serif-light',
  },
  avatar: {
    margin: 5,
    marginTop: 9,
    marginRight: 20,
  },
  topcontainer: {
    flexDirection: 'row',
    paddingHorizontal: 22.5,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  image: {
    // flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
});
