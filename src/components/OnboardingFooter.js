import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {RoundedButton} from './RoundedButton';

export function OnboardingFooter({
  backgroundColor,
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false,
}) {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.17;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: leftButtonLabel ? 'space-between' : 'flex-end',
        height: HEIGHT,
        backgroundColor,
        opacity: 1,
        alignItems: 'center',
        paddingHorizontal: FOOTER_PADDING,
      }}>
      {leftButtonLabel && (
        <RoundedButton label={leftButtonLabel} onPress={leftButtonPress} />
      )}
      <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
    </View>
  );
}
