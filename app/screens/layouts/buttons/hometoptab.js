import {icons} from 'utils'

export const rightButtons = [
    {
      id: 'profileBtn',
      // icon: icons.user,
      icon: icons.platformIcons.user,
      color: 'white',
      disabledColor: 'gray',
      size: 10,      
      buttonFontSize: 15,
      buttonFontWeight: '600',
    },
    {
      id: 'searchBtn',
      // icon: icons.search,
      icon: icons.platformIcons.search_light,
      color: 'white',
      disabledColor: 'gray',
      buttonFontSize: 15,
      buttonFontWeight: '600',
    },
    {
      id: 'videoBtn',
      // component: {
      //   name: 'example.CustomButtonComponent'
      // },
      // icon: icons.video_outline,
      icon: icons.platformIcons.video_light,
      color: 'white',
      disabledColor: 'gray',
      buttonFontSize: 15,
      buttonFontWeight: '600',
    }
  ];

  export const leftButtons = [
    {
      id: 'menuBtn',
      // icon: icons.menu,
      icon: icons.platformIcons.menu_light,
      color: 'white',
      // buttonSize: 15,
      buttonFontSize: 15,
      buttonFontWeight: '600',
    }
  ];

  export default rightButtons;