// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import NetInfo from '@react-native-community/netinfo';
import createStore, { persistor } from './index';

let store;
const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#008080',
    accent: 'yellow',
    placeholder: '#939393'
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
  }
};

class AppStoreProvider extends PureComponent {
  getChildContext() {
    return {
      store,
    };
  }

  static childContextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    store: PropTypes.object
  }

  // componentDidMount() {

  //   NetInfo.addEventListener('connectionChange', this.netInfolistener);
  // }
  // componentWillUnmount() {
  //   NetInfo.removeEventListener('connectionChange', this.netInfolistener);
  // }

  // netInfolistener = ({ type, effectiveType }) => {
  //   let payload = { netInfo: 'true' };
  //   if (type === 'unknown' || type === 'none') {
  //     payload = { netInfo: 'false' };
  //   }
  //   setTimeout(() => {
  //     store.dispatch(storeDeviceEntityCreator.storeDeviceEntity(payload));
  //   }, 2000);
  // };

  render() {
    const { children } = this.props;
    store = store || createStore;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            {children}
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppStoreProvider;
