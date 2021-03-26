import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Linking} from 'react-native';

export function OpenUrlButton({name,style,url}) {

    const handlePress = React.useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={[styles.container,style]}>
     <Text style={[styles.text]}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:2,
    paddingHorizontal:14,
    height:33
},
  text: {
    fontSize: 20,
    color:'black'
},
});
