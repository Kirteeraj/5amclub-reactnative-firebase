import React from 'react';
import {View, Image, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Page from '../components/Page';
import {OnboardingFooter} from '../components/OnboardingFooter';
import { SetProfile } from './SetProfile';

export function Onboarding({navigation}) {
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const pagerRef = React.useRef(null);
  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{flex: 1}}>
      <ViewPager style={{flex: 1}} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#EE9608"
            iconName="flower"
            title="Welcome, lets get started !"
          />
          <OnboardingFooter
            backgroundColor="#EE9608"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        
        <View key="2">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: 453, height: 300, resizeMode: 'stretch'}}
              source={require('../assets/profile.png')}
            />
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#EE9608'}}>
              Lets make a profile !
            </Text>
          </View>
          <OnboardingFooter
            backgroundColor="#EE9608"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
          />
        </View>

        <View key="3">
          <SetProfile navigation={navigation}/>
         
        </View>
      </ViewPager>
    </View>
  );
}
