import { Navigation } from 'react-native-navigation';

export function onboardRoot() {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'Onboarding',
        children: [
          {
            component: {
              name: 'WelcomeScreen',
            },
          },
        ],
        options: {
            topBar: {
                visible: false
            }
        }
      }
    },
  });
}

export default onboardRoot;
