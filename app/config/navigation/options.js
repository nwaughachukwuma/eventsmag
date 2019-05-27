import { Navigation } from 'react-native-navigation';

export function options() {
  return Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893',
      },
      title: {
        color: 'white',
        fontFamily: 'Roboto-Medium'
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white',
      },
      buttonColor: 'white',
      animate: true
    },
    statusBar: {
      style: 'light',
      visible: true,
      backgroundColor: '#008080'
    },
    layout: {
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      backgroundColor: 'white',
      orientation: ['portrait'] // An array of supported orientations
    },
    modalPresentationStyle: 'overCurrentContext', // Supported styles are: 'formSheet', 'pageSheet', 
    // 'overFullScreen', 'overCurrentContext', 'currentContext', 'popover', 'fullScreen' and 'none'. 
    // On Android, only overCurrentContext and none are supported.
    overlay: {
      interceptTouchOutside: true,
      handleKeyboardEvents: true
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      visible: true,
      animate: true, // Controls whether BottomTabs visibility changes should be animated
      // currentTabIndex: 1,
      // currentTabId: 'currentTabId',
      // testID: 'bottomTabsTestID',
      drawBehind: false,
      backgroundColor: 'white'
    },
    bottomTab: {
      iconColor: 'black',
      selectedIconColor: '#039893',
      textColor: 'black',
      selectedTextColor: '#039893',
      fontSize: 10,
      fontFamily: 'Roboto-Medium',
    },
  });
}

export default options;
