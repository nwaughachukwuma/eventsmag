import {Navigation} from 'react-native-navigation';

export function homeBarBtnActions(buttonId, componentId) {

    switch(buttonId) {
        case 'menuBtn':
          Navigation.mergeOptions(componentId, {
            sideMenu: {
              left: {
                component: {
                  id: "Drawer",
                  name: "Drawer"
                },
                visible: true
              }
            }
          });
          break;
        case 'profileBtn':
          Navigation.push(componentId, {
            component: {
              name: 'Profile',
            }
          });
          break;
        default:
          alert(buttonId);
      }
}

export function AppBarBtnActions(buttonId, componentId) {

  switch(buttonId) {
      case 'profileSettingsBtn':
        Navigation.push(componentId, {
          component: {
            name: 'ProfileSettings',
          }
        });
        break;
      case 'backBtn': 
        Navigation.dismissModal(componentId);
        break;
      default:
        alert(buttonId);
    }
}

export default homeBarBtnActions;