import {icons} from 'utils'

export const rightButtons = [
    {
      id: 'profileBtn',
      icon: icons.user,
      color: 'white',
      disabledColor: 'gray',
      size: 10,      
      buttonFontSize: 15,
      buttonFontWeight: '600',
    },
    {
      id: 'searchBtn',
      icon: icons.search,
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
      icon: icons.video_outline,
      color: 'white',
      disabledColor: 'gray',
      buttonFontSize: 15,
      buttonFontWeight: '600',
    }
  ];

  export default rightButtons;