import React from 'react';
import { Navigation } from 'react-native-navigation';
import TextScreen from 'screens/textScreen';
import { SignUp, PasswordRecovery, Login } from 'screens/auth';
import Home from 'screens/home'
import Trending from 'screens/trending'
import Mailbox from 'screens/mailbox'
import Activity from 'screens/activity'
import Myevents from 'screens/myevents'
import Drawer from 'screens/layouts/drawer'
import AuthLoading from 'screens/authLoading';
import Provider from 'app/redux/provider';


function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        <Provider>
          <Component
            {...props}
          />
        </Provider>
      );
  
      return <EnhancedComponent />;
    };
  }

export default function registerScreens() {
    Navigation.registerComponent('AuthLoading', () => WrappedComponent(AuthLoading), () => AuthLoading);
    Navigation.registerComponent('WelcomeScreen', () => WrappedComponent(TextScreen), () => TextScreen);
    Navigation.registerComponent('TextScreen', () => WrappedComponent(TextScreen), () => TextScreen);
    Navigation.registerComponent('Drawer', () => WrappedComponent(Drawer), () => Drawer);
    Navigation.registerComponent('Signup', () => WrappedComponent(SignUp), () => SignUp);
    Navigation.registerComponent('PasswordRecovery', () => WrappedComponent(PasswordRecovery), 
      () => PasswordRecovery);
    Navigation.registerComponent('Login', () => WrappedComponent(Login), () => Login);
    Navigation.registerComponent('Home', () => WrappedComponent(Home), () => Home);
    Navigation.registerComponent('Trending', () => WrappedComponent(Trending), () => Trending);
    Navigation.registerComponent('Mailbox', () => WrappedComponent(Mailbox), () => Mailbox);
    Navigation.registerComponent('Activity', () => WrappedComponent(Activity), () => Activity);
    Navigation.registerComponent('Myevents', () => WrappedComponent(Myevents), () => Myevents);

    console.info('All screens have been registered...');
}
