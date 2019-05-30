import {
  StyleSheet,
} from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';
import { KittenTheme } from './theme';
import { SwitchTypes } from '../components/switch/types';
import { SocialBarTypes } from 'components/socialBar/types';
import { scale, scaleVertical } from 'utils/scale';

const theme = KittenTheme;

export const bootstrap = () => {
  
  
  /*
   RkText types
   */

  RkTheme.setType('RkText', 'moon', {
    fontFamily: 'icomoon',
  });

  RkTheme.setType('RkText', 'awesome', {
    fontFamily: 'FontAwesome',
  });

  RkTheme.setType('RkText', 'hero', {
    fontSize: scale(33),
  });

  RkTheme.setType('RkText', 'menuIcon', {
    fontSize: 44,
  });

  RkTheme.setType('RkText', 'center', {
    text: {
      textAlign: 'center',
    },
  });

  RkTheme.setType('RkText', 'header1', {
    fontSize: theme.fonts.sizes.h1,
    fontFamily: theme.fonts.family.bold,
  });
  RkTheme.setType('RkText', 'header2', {
    fontSize: theme.fonts.sizes.h2,
    fontFamily: theme.fonts.family.bold,
  });
  RkTheme.setType('RkText', 'header3', {
    fontSize: theme.fonts.sizes.h3,
    fontFamily: theme.fonts.family.bold,
  });
  RkTheme.setType('RkText', 'header4', {
    fontSize: theme.fonts.sizes.h4,
    fontFamily: theme.fonts.family.bold,
  });
  RkTheme.setType('RkText', 'header5', {
    fontSize: theme.fonts.sizes.h5,
    fontFamily: theme.fonts.family.bold,
  });
  RkTheme.setType('RkText', 'header6', {
    fontSize: theme.fonts.sizes.h6,
    fontFamily: theme.fonts.family.bold,
  });

  /*
   RKButton types
  */

  RkTheme.setType('RkButton', 'contrast', {
    color: theme.colors.text.base,
  });

  /*
    RKTextInput types
  */
  RkTheme.setType('RkTextInput', 'right', {
    input: {
      textAlign: 'right',
      marginTop: {
        ios: scaleVertical(18),
        android: scaleVertical(11),
      },
    },
    label: {
      fontFamily: theme.fonts.family.light,
    },
    container: {
      marginVertical: 4,
    },
    backgroundColor: 'transparent',
    labelFontSize: theme.fonts.sizes.small,
  });

  /*
   RkCard types
   */

  RkTheme.setType('RkCard', 'basic', {
    container: {
      borderRadius: 3,
      backgroundColor: '#ffffff',
    },
    header: {
      justifyContent: 'flex-start',
      paddingVertical: 14,
    },
    content: {
      padding: 16,
    },
    footer: {
      paddingBottom: 20,
      paddingTop: 7.5,
      paddingHorizontal: 0,
    },
  });

  RkTheme.setType('RkCard', 'backImg', {
    container: {
      borderWidth: 0,
      borderRadius: 0,
    },
    img: {
      height: 225,
    },
    imgOverlay: {
      height: 225,
      backgroundColor: 'transparent',
    },
    content: {
      paddingHorizontal: 14,
    },
    footer: {
      paddingTop: 15,
      paddingBottom: 0,
      paddingVertical: 7.5,
      paddingHorizontal: 0,
    },
  });


  RkTheme.setType('RkCard', 'imgBlock', {
    img: {
      height: 235,
    },
    header: {
      padding: 0,
      paddingVertical: 13,
      paddingHorizontal: 16,
    },
    imgOverlay: {
      height: -1,
    },
    footer: {
      paddingTop: 18,
      paddingBottom: 15,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  });

  RkTheme.setType('RkCard', 'horizontal', {
    container: {
      flexDirection: 'row',
      height: 110,
    },
    content: {
      flex: 1,
    },
    img: {
      height: null,
      flex: -1,
      width: 120,
    },
  });

  RkTheme.setType('RkCard', 'blog', {
    header: {
      paddingHorizontal: 16,
      paddingVertical: 0,
      paddingTop: 16,
    },
    content: {
      padding: 0,
      paddingVertical: 0,
      paddingTop: 12,
    },
    footer: {
      paddingHorizontal: 16,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center',
    },
  });

  RkTheme.setType('RkCard', 'article', {
    container: {
      borderWidth: 0,
      backgroundColor: 'transparent',
    },
    header: {
      paddingVertical: 0,
      paddingTop: 20,
      paddingBottom: 16,
      justifyContent: 'space-between',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: '#f2f2f2',
    },
    content: {
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#f2f2f2',
    },
    footer: {
      paddingHorizontal: 14,
      paddingTop: 15,
      paddingBottom: 16,
      alignItems: 'center',
    },
  });

  /*
   Register components
   */
  RkTheme.registerComponent('RkSwitch', SwitchTypes);
  RkTheme.registerComponent('SocialBar', SocialBarTypes);
};
