import React, {useState, useEffect} from 'react';
import { Navigation } from 'react-native-navigation';
import {useNetInfo} from "@react-native-community/netinfo";
import {Snackbar} from 'react-native-paper';
import TextScreen from 'screens/textScreen';
import { SignUp, PasswordRecovery, Login } from 'screens/auth';
import Home from 'screens/home'
import Trending from 'screens/trending'
import Mailbox from 'screens/mailbox'
import Activity from 'screens/activity'
import Myevents from 'screens/myevents'
import Drawer from 'screens/layouts/drawer'
import AuthLoading from 'screens/authLoading';
import Profile from 'screens/profile';
import ProfileSettings from 'screens/profileSettings';
import Provider from 'app/redux/provider';


function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => {
        // Todo: wrap netinfo around each component
        const netInfo = useNetInfo();
        const [offline, setOffline] = useState(false);
        const [checker, setChecker] = useState(false);
        const [online, setOnline] = useState(true);
        
        useEffect(() => {
          if (!netInfo.isConnected && netInfo.type === 'none') {
            setOffline(true);            
            setOnline(false);
            setChecker(true);
          }else {
            setOffline(false);
            setOnline(true);
          }
        }, [netInfo.isConnected] )

        return (
          <Provider>
            <Component
              {...props}
              netInfo={netInfo}
            />
            <Snackbar
              visible={offline}
              onDismiss={() => setOffline(false) }
              action={{
                label: 'OK',
                onPress: () => setOffline(false),
              }}
            >
              You are offline
            </Snackbar>
            <Snackbar
              visible={online && checker}
              onDismiss={() => setOnline(false) }
              action={{
                label: 'OK',
                onPress: () => setOnline(false),
              }}
              style={{ backgroundColor: '#329999'}}
            >
              You are online
            </Snackbar>
          </Provider>
        );
      }
  
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
    Navigation.registerComponent('Profile', () => WrappedComponent(Profile), () => Profile);
    Navigation.registerComponent('ProfileSettings', () => WrappedComponent(ProfileSettings), () => ProfileSettings);

    console.info('All screens have been registered...');
}
