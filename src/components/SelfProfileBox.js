import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-ionicons';
import {AvatarImage} from './AvatarImage';
import {AwakeIndicator} from './AwakeIndicator';
import {IconButton} from './IconButton';
import {OutlineButton} from './OutlineButton';
import avatarImage from '../assets/avatar.png';

const avatarImageUri = Image.resolveAssetSource(avatarImage).uri;

export function SelfProfileBox() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View
          style={{
            minWidth: 208,
            flexDirection: 'column',
            alignContent: 'center',
            marginLeft: 14,
          }}>
          <Text allowFontScaling={false} style={styles.name}>
            Camp: April 21
          </Text>
          <Text allowFontScaling={false} style={styles.intro}>
            Facilitator: Pranav patil
          </Text>
        </View>
        <View
          style={{
            minWidth: 125,
            alignItems: 'center',
          }}>
          <AvatarImage
            size={67}
            style={{marginTop: 5}}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/profilephotos%2F757sHgEM0gMBnawub0vLdeFepFk2?alt=media&token=ec823ac4-c763-40da-afc0-eb80e59cfdf0',
            }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{minWidth: 208, flexDirection: 'row'}}>
          <IconButton name={'logo-whatsapp'} color={'#25D366'} />
          <IconButton name={'call'} color={'blue'} />
        </View>
        <View style={{minWidth: 120}}>
          <OutlineButton
            name={'I am awake'}
            style={{backgroundColor: '#E4CF5F'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 21,
    display: 'flex',
    backgroundColor: '#fafafa',
    width: '90%',
    height: 124,
    borderRadius: 8,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 80,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 44,
    width: '100%',
    backgroundColor: 'rgba(239, 151, 151, 0.19)',
    paddingHorizontal: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    width: 208,
    height: 21,
    marginTop: 13,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  intro: {
    width: 211,
    height: 23,
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 2,
  },
});
