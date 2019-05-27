// Initializing.js
import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Image,
  StatusBar
} from 'react-native'
import { firestoreConnect, withFirebase} from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { goToAuth, goHome, goOnboard } from './navigator'
import {images} from 'utils'
import { bootstrap } from '../config/bootstrap';

// initialize RkThemes as app themes
bootstrap();

export class AuthLoading extends PureComponent {
  
  componentDidMount() {
    StatusBar.setHidden(true, 'none');
    setTimeout(
      () => this.navigate(),
      2000
    )
  }

  componentWillUnmount() {
    StatusBar.setHidden(false, 'fade');
  }

  navigate = async () => {
    const {userProfile, userAuth} = this.props;
    console.log('profile: ', userProfile, 'auth: ', userAuth)
    try {
      if ( !userAuth.isEmpty) {
        goHome()
      } else {
        goToAuth()
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          // source={images.logo}
          source={{uri: 'logo_transparent'}}
          style={{ width: 140, height: 140, resizeMode: 'cover' }} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  const { firebase } = state;
  return { 
    userProfile: firebase.profile,
    userAuth: firebase.auth
  }
}

export default compose(
  withFirebase,
  connect(mapStateToProps, null)
)(AuthLoading)