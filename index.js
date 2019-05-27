/**
 * created by nwaughachukwuma
 * @format
 */

import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Screens from 'app/initScreens';
import bgMessaging from 'app/config/bgMessaging';

// register screens
Screens();
Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    root: {
      component: {
        name: 'AuthLoading',
      },
    },
  });
});
// New task registration: firebase bg messaging
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
