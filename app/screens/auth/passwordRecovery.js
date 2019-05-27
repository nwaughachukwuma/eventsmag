import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Alert,
  Easing,
  Keyboard
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { Navigation } from 'react-native-navigation';
import {TextInput} from 'react-native-paper';
import { withFirebase} from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import LoginCreator from 'appredux/login';
import { Button } from 'components';
import { scaleVertical } from '../../utils/scale';
import { images } from 'utils'
import Loading from 'components/loading';

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: scaleVertical(24),
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    alignItems: 'center',
    marginTop: 25
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium'
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  image: {
    marginVertical: scaleVertical(27),
    height: scaleVertical(120),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'center'
  },
  description: {
    color: '#939393', 
    fontSize: 10, 
    alignSelf: 'center', 
    marginVertical: 10
  }
}));

export class PasswordRecovery extends React.Component {
  name = 'Password Recovery'
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      navHeaderShown: true,
      animated: new Animated.Value(0)
    }
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Password Recovery'
        },
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  componentDidMount() {
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

  componentDidUpdate(prevProps, _ ) {    
    if (this.props !== prevProps) {
      if (this.props.success) {
        this.props.resetPasswordReset();
        this.setState({email: ''});
        Alert.alert('Alert!', 'Password reset success!', [
          {text: 'OK', onPress: () => {
            Navigation.mergeOptions(this.props.componentId, {
              bottomTabs: {
                currentTabIndex: 0
              }
            });
          }}
        ],
        {cancelable: true}
        );
      }
      if (this.props.error) {
        Alert.alert('Recovery error', this.props.errorMessage);
        this.props.resetPasswordReset()
      }
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
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

  onSendButtonPressed = async () => {
    const {email} = this.state;
    if (!email.length) {
      alert('Email is required')
      return;
    }
    try {
      this.props.reset()
      this.props.firebase.resetPassword(email)
      .then( result => this.props.resetSuccess() )
      .catch( error => 
        Promise.reject(error)
        .then(
          resolved => resolved,
          rejected => this.props.resetError(rejected.message)
        )
      );
    }catch (error) {
      this.props.resetError(error.message);
    }
  };

  getThemeImageSource = (theme) => (
    theme.name === 'light' ? images.logoDark : images.logo
  );

  renderImage = () => (
    <Animated.Image 
      style={[styles.image, {display: this.state.navHeaderShown? 'flex': 'none'}]} 
      source={this.getThemeImageSource(RkTheme.current)} />
  );

  onChangeText = val => {
    this.setState({email: val});
  }

  render() {

    if (this.props.fetching) {
      return (
        <Loading />
      )
    }
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}>
        <View style={styles.header}>
          {this.renderImage()}
          <Text style={styles.headerText}>Password Recovery</Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput 
              style={{marginBottom: 5}}
              onChangeText={val => this.onChangeText(val)}
              ref={ref => this.passwordField = ref}
              placeholder='Email' 
              mode="outlined"
              // autoFocus
              label='e-mail'
              value={this.state.email}
              returnKeyType="done"
              theme={{roundness: 30}}
            />
            <Text style={styles.description}>
              Enter your email to receive your password reset instructions
            </Text>
            <Button
              style={styles.save}
              text='SEND'
              onPress={this.onSendButtonPressed}
            />
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

const mapStateToProps = state => {
  const {firebase, loginState} = state;
  return {
    fetching: loginState.fetching.resetPassword,
    success: loginState.success.resetPassword,
    error: loginState.error.resetPassword,
    errorMessage: loginState.error.resetMessage,
    userAuth: firebase.auth,
    userProfile: firebase.profile
  }
}

const mapDispatchToProps = dispatch => ({
  reset: ()=> dispatch(LoginCreator.resetPassword()),
  resetSuccess: ()=> dispatch(LoginCreator.resetPasswordSuccess()),
  resetError: (error)=> dispatch(LoginCreator.resetPasswordFailure(error)),
  resetPasswordReset: ()=> dispatch(LoginCreator.resetPasswordReset()),
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(PasswordRecovery);