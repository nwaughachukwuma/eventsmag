import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

export const bottomTabs = {
    children: [{
        stack: {
          children: [{
            component: {
              name: 'WelcomeScreen',
              passProps: {
                text: 'This is tab 1'
              }
            }
          }],
          options: {
            bottomTab: {
              text: 'Tab 1',
              icon: <Icon name="home" size={20} />,
              testID: 'FIRST_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: 'Tab 2',
              icon: <Icon name="airplay" size={20} />,
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is tab 3'
          },
          options: {
            bottomTab: {
              text: 'Tab 3',
              icon: <Icon name="mail" size={20} />,
              testID: 'THIRD_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is tab 4'
          },
          options: {
            bottomTab: {
              text: 'Tab 4',
              icon: <Icon name="activity" size={20} />,
              testID: 'FOURTH_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'TextScreen',
          passProps: {
            text: 'This is tab 5'
          },
          options: {
            bottomTab: {
              text: 'Tab 5',
              icon: <Icon name="folder" size={20} />,
              testID: 'FIFTH_TAB_BAR_BUTTON'
            }
          }
        }
      },
    ]
}

export default bottomTabs;