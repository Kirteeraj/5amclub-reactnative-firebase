import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ProfileBox} from '../components/SubgroupScreen/ProfileBox';
import {SelfProfileBox} from '../components/SubgroupScreen/SelfProfileBox';
import {ScrollView} from 'react-native-gesture-handler';

export function SubgroupScreen({navigation}) {
  React.useEffect(() => {
    navigation.setOptions({
      title: '',
      color: '#EE9608',
    });
  }, [navigation]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <SelfProfileBox />
          <ProfileBox />
          <ProfileBox />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: 700,
  },
});
