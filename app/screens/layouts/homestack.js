// import React from 'react';
import { Navigation } from 'react-native-navigation';
import sideMenu from './sidemenu';
import { data } from '../../data';

data.populateData();
export function appRoot() {
  return Navigation.setRoot({
    root: {
      sideMenu,
    },
  });
}

export default appRoot;
