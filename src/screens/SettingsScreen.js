import React from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {logout} from '../api/index';
import {lightTheme} from '../themes/light';
import {OutlineButton} from '../components/OutlineButton';
import {AvatarImage} from '../components/AvatarImage';
import avatarImage from '../assets/avatar.png';

const {colors} = lightTheme;

export function SettingsScreen() {
  const data = {
    name: 'Kirteeraj Malkar',
    intro: 'Creative Developer',
    uri: Image.resolveAssetSource(avatarImage).uri,
  };

  return (
    <View style={[styles.container]}>
      <View style={{alignItems: 'center'}}>
        <AvatarImage size={140} style={styles.image} source={{uri: data.uri}} />
        <Text
          allowFontScaling={false}
          style={{
            marginTop: 7,
            fontWeight: 'bold',
            fontSize: 18,
            color: lightTheme.colors.orange,
          }}>
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
          }}
          allowFontScaling={false}>
          {data.intro}
        </Text>
      </View>
      {/* Buttons */}
      <View style={{marginTop: 40, width: 300}}>
        <OutlineButton
          name={'Edit profile'}
          style={styles.button}
          color={colors.orange}
        />
        <OutlineButton
          name={'Contact Us'}
          style={styles.button}
          color={colors.orange}
        />
        <OutlineButton
          name={'Contact Us'}
          style={styles.button}
          color={colors.orange}
        />
        <Button title={'Logout'} color={colors.orange} onPress={logout} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  heading: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: '75%',
    fontSize: 100,
    fontWeight: '700',
  },
  button: {
    borderRadius: 8,
    height: 35,
    alignItems: 'center',
    marginBottom: 10,
  },
});
