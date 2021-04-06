import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CampaignBox} from '../components/CampingsScreen/CampaignBox';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchCollection} from '../hooks/fetchCollection';

export function CampaignsScreen({navigation}) {
  React.useEffect(() => {
    navigation.setOptions({
      title: 'Upcoming Campaigns',
      color: '#EE9608',
    });
  }, [navigation]);

  var data = fetchCollection('campaigns');
  console.log('data', data);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {data.map((camp) => {
            return <CampaignBox key={camp.name} campData={camp} />;
          })}
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
