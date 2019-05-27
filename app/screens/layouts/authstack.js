import { Navigation } from 'react-native-navigation';
import { icons } from 'utils';
import { bottomTabs as authTabs } from './tabs/authTabs';

export function authRoot() {
  return Navigation.setRoot({
    root: {
      bottomTabs: authTabs
    },
  });
}

export default authRoot;
