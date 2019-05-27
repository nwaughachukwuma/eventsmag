import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Keyboard,
  Text,
  Alert,
  Animated,
  Easing
} from 'react-native';
import {
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { Navigation } from 'react-native-navigation';
import { firestoreConnect, withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper'
import { Button, LogoButton } from 'components';
import { scaleVertical } from 'utils/scale';
import { images } from 'utils'
import { goToAuth, goHome, goOnboard } from '../navigator'
import LoginCreator from 'appredux/login';
import Loading from 'components/loading';

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    height: scaleVertical(120),
    resizeMode: 'contain',
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    justifyContent: 'space-between',
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderColor: theme.colors.border.solid,
  },
  footer: {},
}));

export class Login extends React.Component {
  
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Login'
        },
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  static propTypes = {
    store: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      navHeaderShown: true,
      animated: new Animated.Value(0)
    }
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }
  
  componentDidMount() {
    // StatusBar.setBackgroundColor('#008080');
    // StatusBar.setBarStyle('light-content');
    // this.props.firestore.get('events');
    
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      
      if (this.props.success && !prevProps.success) {
        goHome();
        this.props.loginReset();
      }
      if (this.props.error && !prevProps.error) {
        Alert.alert('Login Error', this.props.errorMessage)
        this.props.loginReset();
      }
    }
  }

  componentWillUnmount() {
    if (this.keyboardDidShowListener) this.keyboardDidShowListener.remove();
    if (this.keyboardDidHideListener) this.keyboardDidHideListener.remove();
    Keyboard.dismiss();
  }

  _keyboardDidShow() {
    this.setState({ navHeaderShown: false })
    Animated.timing(this.state.animated, {
      toValue: 1,
      easing: Easing.linear,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  _keyboardDidHide() {
    this.setState({ navHeaderShown: true })
    Animated.timing(this.state.animated, {
      toValue: 0,
      easing: Easing.linear,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  onLoginButtonPressed = async () => {
    const {email, password} = this.state;
    const emptyCredentials = [email, password].filter(el => !el.length)
    if (emptyCredentials.length) {
      alert('All fields are required');
      return;
    }
    const payload = {
      email: email,
      password: password
    }

    try{
      this.props.login();
      await this.props.firebase.login(payload);
      this.props.loginSuccess();
    }catch(error) {
      this.props.loginFailure(error.message);
    }
  };

  onChangeText = (elem, val) => {
    switch(elem) {
      case 'email':
        this.setState({email: val});
        break;
      default:
        this.setState({password: val});
    }
  }

  getThemeImageSource = (theme) => (
    theme.name === 'light' ? images.logoDark : images.logo
  );

  renderImage = () => (
    <Animated.Image 
      style={[styles.image, {display: this.state.navHeaderShown? 'flex': 'none'}]} 
      source={this.getThemeImageSource(RkTheme.current) } 
    />
  );

  // social auth
  googleAuth = () => {
    alert('Use a RN google auth lib of your choice')
  }

  facebookAuth = () => {
    alert('Use a RN facebook auth lib of your choice')
  }

  twitterAuth = () => {
    alert('Use a RN twitter auth lib of your choice')
  }

  render() {

    if (this.props.fetching) {
      return (
        <Loading />
      );
    }

    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{backgroundColor: '#FFF'}}
        >
          <View 
            style={styles.header}
          >
            {this.renderImage()}
          </View>
          <View style={styles.content}>
            <View>
              <TextInput 
                style={{marginBottom: 5}}
                onSubmitEditing={ ()=> this.password.focus()}
                onChangeText={val => this.onChangeText('email', val)}
                placeholder='Email' 
                mode="outlined"
                label='e-mail'
                blurOnSubmit={false}
                value={this.state.email}
                returnKeyType="next" 
                theme={{roundness: 30}}
              />
              <TextInput 
                style={{marginTop: 5}}
                ref={el => (this.password = el)}
                onChangeText={val => this.onChangeText('password', val)}
                placeholder='Password' 
                mode="outlined"
                label='password'
                value={this.state.password}
                returnKeyType="done" 
                theme={{roundness: 30}}
                secureTextEntry 
              />
              <Button
                style={styles.save}
                text='LOGIN'
                onPress={this.onLoginButtonPressed}
              />
            </View>
            <View style={styles.buttons}>
              <LogoButton style={styles.button} onPress={this.twitterAuth} icon="twitter" />
              <LogoButton style={styles.button} onPress={this.googleAuth} icon="google" />
              <LogoButton style={styles.button} onPress={this.facebookAuth} icon="facebook" />
            </View>
          </View>
        </ScrollView>
      </RkAvoidKeyboard>
    );
  }
}

const mapStateToProps = state => {
  const { loginState, firestore } = state;
  return {
    fetching: loginState.fetching.login,
    success: loginState.success.login,
    error: loginState.error.login,
    errorMessage: loginState.error.loginMessage,
    events: firestore.ordered.events
  }
}

const mapDispatchToProps = dispatch => ({
  login: ()=> dispatch(LoginCreator.login()),
  loginSuccess: ()=> dispatch(LoginCreator.loginSuccess()),
  loginFailure: (error)=> dispatch(LoginCreator.loginFailure(error)),
  loginReset: ()=> dispatch(LoginCreator.loginReset())
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
 )(Login)
