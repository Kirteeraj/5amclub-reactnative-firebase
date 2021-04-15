import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {AvatarImage} from './AvatarImage';
import {AwakeIndicator} from './AwakeIndicator';
import {IconButton} from './IconButton';
import {OutlineButton} from './OutlineButton';
import avatarImage from '../assets/avatar.png';

const {width} = Dimensions.get('window');
const avatarImageUri = Image.resolveAssetSource(avatarImage).uri;

export function ProfileBox() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{marginLeft: 4}}>
          <AvatarImage
            size={width * 0.32}
            style={{marginTop: 20}}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/profilephotos%2F757sHgEM0gMBnawub0vLdeFepFk2?alt=media&token=ec823ac4-c763-40da-afc0-eb80e59cfdf0',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
          }}>
          <Text allowFontScaling={false} style={styles.name}>
            Kirteeraj Malkar
          </Text>
          <Text allowFontScaling={false} style={styles.intro}>
            Creative Developer
          </Text>
          <AwakeIndicator awake={false} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{minWidth: 120}}>
          <OutlineButton name={'More Info'} />
        </View>
        <View style={{minWidth: 208, flexDirection: 'row-reverse'}}>
          <IconButton name={'call'} color={'blue'} />
          <IconButton name={'logo-whatsapp'} color={'#25D366'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 18,
    backgroundColor: '#fafafa',
    width: '90%',
    height: 203,
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
    height: 159,
    paddingHorizontal: 7,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 44,
    width: '100%',
    backgroundColor: 'rgba(239, 151, 151, 0.19)',
    paddingHorizontal: 7,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    width: 208,
    height: 29,
    marginTop: 18,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto',
    lineHeight: 29,
  },
  intro: {
    width: 211,
    height: 23,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
});
