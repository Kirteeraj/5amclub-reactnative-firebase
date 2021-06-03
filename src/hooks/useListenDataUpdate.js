import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export default function useListenDataUpdate(callback) {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      await callback();
      console.log(
        `Recived dataUpdate push notification, Message: ${remoteMessage}`,
      );
    });

    return unsubscribe;
  }, []);
}
