import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import {OutlineButton} from '../OutlineButton';
import {razorpayPay} from '../../api/index';
import {Loading} from '../../components/Loading';

export function CampaignBox({campData}) {
  var data = {
    id: campData.id.id,
    name: campData.name,
    date: campData.date,
    time: campData.time,
    fees: campData.fees,
    facilitatorName: campData.facilitatorName,
    notes: campData.notes,
    details: campData.details,
    imageLink: campData.imageLink,
    paymentLink: campData.paymentLink,
  };
  const [info, setInfo] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  var toogleData = info
    ? {
        display: {display: 'flex'},
        icon: 'arrow-dropup',
        text: 'Less Info',
      }
    : {
        display: {display: 'none'},
        icon: 'arrow-dropdown',
        text: 'More Info',
      };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Image
            style={{height: '100%', width: 131, borderTopLeftRadius: 8}}
            source={{
              uri: data.imageLink,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: '60%',
            alignContent: 'center',
          }}>
          <Text allowFontScaling={false} style={styles.name}>
            {data.name}
          </Text>
          <Text allowFontScaling={false} style={styles.date}>
            {data.date}
          </Text>
          <Text allowFontScaling={false} style={styles.time}>
            {data.time}
          </Text>
          <Text allowFontScaling={false} style={styles.notes}>
            {data.notes}
          </Text>
        </View>
      </View>
      <View style={toogleData.display}>
        <Text allowFontScaling={false} style={styles.details}>
          {data.details}
        </Text>
        <Text allowFontScaling={false} style={styles.facilitator}>
          Facilitator: {data.facilitatorName}
        </Text>
        <Text allowFontScaling={false} style={styles.facilitator}>
          Fees: Rs.{data.fees}/-
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={{minWidth: 120}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              if (info) {
                setInfo(false);
              } else {
                setInfo(true);
              }
            }}>
            <Icon name={toogleData.icon} />
            <Text allowFontScaling={false} style={{fontSize: 19}}>
              {' '}
              {toogleData.text}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{minWidth: 180, flexDirection: 'row-reverse'}}>
          <OutlineButton
            name={'Join Now'}
            onpress={async () => {
              try {
                setLoading(true);
                await razorpayPay(data);
              } catch (err) {
                alert(`We are having some trouble: ${err}`);
              } finally {
                setLoading(false);
              }
            }}
          />
        </View>
      </View>
      <Loading loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 18,
    backgroundColor: '#fafafa',
    width: '90%',
    maxWidth: 400,
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
    justifyContent: 'space-between',
    width: '100%',
    height: 159,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    width: '100%',
    backgroundColor: 'rgba(239, 151, 151, 0.19)',
    paddingHorizontal: 8,
  },
  name: {
    width: 200,
    height: 35,
    marginTop: 6,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  date: {
    width: 211,
    marginTop: -4,
    height: 23,
    fontSize: 15,
    textAlign: 'center',
  },
  time: {
    width: 211,
    height: 23,
    fontSize: 15,
    textAlign: 'center',
    marginTop: -6,
  },
  notes: {
    width: '100%',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    marginBottom: 0,
    marginTop: 'auto',
    textAlign: 'right',
    paddingHorizontal: 10,
    fontSize: 12.5,
    fontWeight: '700',
    color: '#FF8686',
  },
  details: {
    marginHorizontal: 12,
    marginVertical: 12,
    fontSize: 15,
    color: '#FF7777',
    fontWeight: '700',
  },
  facilitator: {
    marginHorizontal: 12,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
});
