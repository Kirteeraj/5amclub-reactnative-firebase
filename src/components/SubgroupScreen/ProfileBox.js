import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Linking} from 'react-native';
import {AvatarImage} from '../AvatarImage';
import {AwakeIndicator} from '../AwakeIndicator';
import {IconButton} from '../IconButton';
import {OutlineButton} from '../OutlineButton';
import avatarImage from '../../assets/avatar.png';
import useExpandable from '../../hooks/useExpandable';

const {width} = Dimensions.get('window');
// const avatarImageUri = Image.resolveAssetSource(avatarImage).uri;

export function ProfileBox() {
  //Data
  const data = {
    name: 'Kirteeraj Malkar',
    intro: 'Creative Developer',
    imageUri:
      'https://firebasestorage.googleapis.com/v0/b/amclub-cd890.appspot.com/o/profilephotos%2F757sHgEM0gMBnawub0vLdeFepFk2?alt=media&token=ec823ac4-c763-40da-afc0-eb80e59cfdf0',
    scrribleSpace:
      'I m more interested always in improving myself in one thing in they key areas -physical fitness, relationship and my finance.. my hobbies is gyming and reading book . I don’t have any issues in my life .. apart if I create one .. I suggest every person should select one field to improve in week .. they can bring massive change over a time .. thank you',
    contribution:
      'Improve or concentrate on one thing that you want to improve in key areas of physical fitness , relationship and finance ..',
    place: 'Kolhapur, Maharashtra',
    whatsappNo: '919405550489',
    wakeUpNo: '919405550489',
  };

  //useExpandable for more Info
  const {toogle, toogleData} = useExpandable();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{marginLeft: 4}}>
          <AvatarImage
            size={width * 0.32}
            style={{marginTop: 20}}
            source={{
              uri: data.imageUri,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
          }}>
          <Text allowFontScaling={false} style={styles.name}>
            {data.name}
          </Text>
          <Text allowFontScaling={false} style={styles.intro}>
            {data.intro}
          </Text>
          <AwakeIndicator awake={false} />
        </View>
      </View>
      <View style={[styles.info, toogleData.displayStyle]}>
        <Text allowFontScaling={false} style={styles.question}>
          Scrrible Space
        </Text>
        <Text allowFontScaling={false} style={styles.answer}>
          {data.scrribleSpace}
        </Text>
        <Text allowFontScaling={false} style={styles.question}>
          What can I contirbute ?
        </Text>
        <Text allowFontScaling={false} style={styles.answer}>
          {data.contribution}
        </Text>
        <Text allowFontScaling={false} style={styles.question}>
          Place
        </Text>
        <Text allowFontScaling={false} style={styles.answer}>
          {data.place}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={{minWidth: 120}}>
          <OutlineButton name={toogleData.text} onpress={toogle} />
        </View>
        <View style={{minWidth: 208, flexDirection: 'row-reverse'}}>
          <IconButton
            name={'call'}
            color={'blue'}
            onPress={() => {
              Linking.openURL(`tel:${data.wakeUpNo}`).catch((error) => {
                console.log(error);
                alert(
                  `Unable To Open DialPad\n Name: ${data.name} \nNo: ${data.whatsappNo}`,
                );
              });
            }}
          />
          <IconButton
            name={'logo-whatsapp'}
            color={'#25D366'}
            onPress={() => {
              Linking.openURL(
                `whatsapp://send?text=Hi+5aimer&phone=${data.whatsappNo}`,
              ).catch(() => {
                alert(
                  `Unable To Open WhatsApp \nName: ${data.name} \nWhatsApp No: ${data.whatsappNo}`,
                );
              });
            }}
          />
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
    height: 'auto',
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
  info: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  question: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '700',
    color: 'rgb(299, 151, 151)',
    textAlign: 'left',
  },
  answer: {
    fontSize: 14.5,
  },
});
