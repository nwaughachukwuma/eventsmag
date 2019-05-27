import React from 'react';
import { icons } from 'utils';

export const bottomTabs = {
  id: 'AuthBottomTabsId',
  children: [
    {
      component: {
        name: 'Login',
        passProps: {
          text: 'This is login screen',
        },
        options: {
          bottomTab: {
            text: 'Sign In',
            icon: icons.login,
          },
        },
      },
    },
    {
      component: {
        name: 'Signup',
        passProps: {
          text: 'This is signup screeny',
        },
        options: {
          bottomTab: {
            text: 'Sign Up',
            icon: icons.userPlus,
          },
        },
      },
    },
    {
      component: {
        name: 'PasswordRecovery',
        passProps: {
          text: 'This is password recovery screen',
        },
        options: {
          bottomTab: {
            text: 'Password reset',
            icon: icons.key,
          },
        },
      },
    },
  ],
  options: {}
};

export default bottomTabs;
