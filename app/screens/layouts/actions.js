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
        // case 'profileBtn':
        //   Navigation.push(componentId, {
        //     component: {
        //       name: 'Drawer',
        //     }
        //   });
        //   break;
        default:
          alert(buttonId);
      }
}

export default homeBarBtnActions;