// navigation.js
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { icons } from 'utils'
import { authRoot, appRoot, onboardRoot } from 'app/screens/layouts'
import options from 'config/navigation/options'

export const goToAuth = () => {
  options();
  authRoot();
};

export const goHome = () => {
  options();
  appRoot();
} 

export const goOnboard = () => {
  options();
  onboardRoot();
} 
