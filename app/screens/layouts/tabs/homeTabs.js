import React from 'react';
import { icons } from 'utils'

export const bottomTabs = {
  id: 'HomeBottomTabsId',
  children: [
  {
    stack: {
      children: [{
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is second home tab',
          },
        },
      },
      {
        component: {
          name: 'Home',
          passProps: {
            text: 'This is home tab',
          },
        },
      }],
      options: {
        bottomTab: {
          text: 'Home',
          icon: icons.home,
          testID: 'FIRST_TAB_BAR_BUTTON',
        },
      },
    },
  },
  {
    stack: {
      children: [{
        component: {
          name: 'Trending',
          passProps: {
            text: 'This is trending screen',
          },
        }
      }],
      options: {
        bottomTab: {
          text: 'Trending',
          icon: icons.fire,
          testID: 'SECOND_TAB_BAR_BUTTON',
        }
      }
    },
  },
  {
    stack: {
      children: [{
        component: {
          name: 'Myevents',
          passProps: {
            text: 'This is my events',
          },
        },
      }],
      options: {
        bottomTab: {
          text: 'My Events',
          icon: icons.event,
          testID: 'THIRD_TAB_BAR_BUTTON',
        },
      }
    }
  },
  {
    stack: {
      children: [{
        component: {
          name: 'Activity',
          passProps: {
            text: 'This is activity',
          }
        },
      }],
      options: {
        bottomTab: {
          text: 'History',
          icon: icons.activity,
          testID: 'FOURTH_TAB_BAR_BUTTON',
        },
      }
    }
  },
  {
    stack: {
      children: [{
        component: {
          name: 'Mailbox',
          passProps: {
            text: 'This is mailbox',
          },          
        },
      }],
      options: {
        bottomTab: {
          text: 'Inbox',
          icon: icons.mail,
          testID: 'FIFTH_TAB_BAR_BUTTON',
        },
      },
    }
  }],
  options: {
    bottomTabs: {
      // currentTabIndex: 0,
      // currentTabId: 'currentTabId',
      // testID: 'bottomTabsTestID',
    },
  }
};

export default bottomTabs;
