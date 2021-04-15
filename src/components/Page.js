import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-ionicons';

const Page = ({backgroundColor, iconName, title}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}>
      <Icon name={iconName} size={172} color="white" />
      <View style={{marginTop: 16}}>
        <Text
          allowFontScaling={false}
          style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Page;
