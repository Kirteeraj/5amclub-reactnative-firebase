import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export function ProfileScreen({navigation}){

    React.useEffect(() => {
        navigation.setOptions({
          title: 'nameVar',
          color:'#EE9608',
        });
      }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>Welcome to profile Scrreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});