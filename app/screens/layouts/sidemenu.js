import React from 'react';
import { bottomTabs as appTabs } from './tabs/homeTabs';
import {icons} from 'utils'


export const sideMenu = {
  left: {
    bottomTabs: {
      id: 'sideMenuBottomTabs',
      children: [{
        component: {
          name: 'Drawer',
          passProps: {
            text: 'This is the left side menu',
          },
          options: {
            bottomTab: {
              text: 'Menu',
              icon: icons.airplay,
            },
            layout: {
              backgroundColor: 'white',
            }
          },
        },        
      },
      {
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is menu text screen',
          },
          options: {
            bottomTab: {
              text: 'Accounts',
              icon: icons.account_switch,
            },
            layout: {
              backgroundColor: 'white',
            }
          }
        }
      }],
      // option point
      options: {}
    },
  },
  center: {
    bottomTabs: appTabs,
  },
  options: {
    left: {
      width: 260,
      visible: true,
      enabled: true,
    }
  }
};

export default sideMenu;
