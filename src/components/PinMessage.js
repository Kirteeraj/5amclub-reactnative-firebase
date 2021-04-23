import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AvatarImage} from './AvatarImage';
import avatarImage from '../assets/avatar.png';

var avatarImageUri = Image.resolveAssetSource(avatarImage).uri;
var facilatorImage =
  'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/profilephotos%2F757sHgEM0gMBnawub0vLdeFepFk2?alt=media&token=ec823ac4-c763-40da-afc0-eb80e59cfdf0';

export function PinMessage() {
  var data = {
    date: '29-04-2021',
    message: 'Welcome, We are Having Induction, Session on 30th April 6:00 pm',
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <AvatarImage size={50} source={{uri: facilatorImage}} />
        <Text style={styles.message}>{data.message}</Text>
      </View>
      <Text
        style={{alignSelf: 'flex-end', fontSize: 12}}
        allowFontScaling={false}>
        {data.date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '90%',
    padding: 5,
    borderColor: 'orange',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  date: {},
  message: {
    flex: 1,
    flexWrap: 'wrap',
    margin: 5,
    textAlign: 'left',
  },
});
