import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';

export const useNotifications = () => {
  useEffect(() => {
    const init = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (!enabled) return;

        const registrationToken = await messaging().getToken();
        console.log('registrationToken', registrationToken);

        messaging().onMessage(async remoteMessage => {
          console.log('remoteMessage', remoteMessage);
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });
      } catch (error) {
        console.log('NOTI ERROR', error);
      }
    };

    init();
  }, []);
};
