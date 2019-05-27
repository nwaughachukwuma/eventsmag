import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Keyboard,
  Animated,
  Alert,
  Easing,
  Platform
} from 'react-native';
import {
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import { Navigation } from 'react-native-navigation';
import {TextInput} from 'react-native-paper';
import { withFirebase} from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import SignupCreator from 'appredux/signup';
import { Button } from 'components';
import { scaleVertical } from 'utils/scale';
import { images } from 'utils'
import { goToAuth, goHome } from '../navigator'
import Loading from 'components/loading'

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    marginBottom: 5,
    height: scaleVertical(100),
    resizeMode: 'contain',
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export class SignUp extends React.Component {
  
  name = 'Registration';
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Registration'
        },
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      navHeaderShown: true,
      animated: new Animated.Value(0)
    }
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  componentDidMount() {
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
        this.props.signupReset();
      }
      if (this.props.error && !prevProps.error) {
        Alert.alert('Signup Error', this.props.errorMessage)
        this.props.signupReset();
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

  getThemeImageSource = (theme) => (
    theme.name === 'light' ? images.logoDark : images.logo
  );

  renderImage = () => (
    <Animated.Image 
      style={[styles.image, {display: this.state.navHeaderShown? 'flex': 'none'}]} 
      source={this.getThemeImageSource(RkTheme.current)} 
    />
  );

  onSignUpButtonPressed = () => {
    // perform signup and show success page
    const {name, email, password, cpassword} = this.state;
    const emptyCredentials = [name, email, password, cpassword].filter(el => !el.length)
    if (emptyCredentials.length) {
      alert('All fields are required');
      return;
    }
    if (password !== cpassword) {
      Alert.alert('Password error', 'Ensure that both passwords match');
      return;
    }
    const payload = {
      name: name,
      email: email,
      password: password,
      username: email,
      platform: Platform.OS
    }
    try {
      this.props.signup()
      this.createNewUser(payload).then( async response => {
        console.log(response)
        await this.props.signupSuccess();
      });
    } catch (error) {
      console.log(error)
      this.props.signupFailure(error);
    }
  };

  createNewUser = async ({ name, email, password, username, platform }) => {
    return this.props.firebase.createUser(
      { email, password }, // login credentials
      { username, email, name, platform } // firestore data
    );
  }

  onChangeText = (elem, val) => {
    switch(elem) {
      case 'name':
        this.setState({name: val});
        break;
      case 'email':
        this.setState({email: val});
        break;
      case 'password':
        this.setState({password: val});
        break;
      default:
        this.setState({cpassword: val});
    }
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
          style={{flex: 1}}
        >
        <View style={styles.header}>
          {this.renderImage()}
        </View>
        <View style={styles.content}>
          <View>
            <TextInput 
              style={{marginVertical: 5}}
              onSubmitEditing={ ()=> this.email.focus()}
              onChangeText={val => this.onChangeText('name', val)}
              placeholder='Name' 
              mode="outlined"
              blurOnSubmit={false}
              label='Name'
              value={this.state.name}
              returnKeyType="next" 
              theme={{roundness: 30}}
            />
            <TextInput 
              style={{marginVertical: 5}}
              ref={el => (this.email = el)}
              onSubmitEditing={ ()=> this.password.focus()}
              onChangeText={val => this.onChangeText('email', val)}
              placeholder='Email' 
              mode="outlined"
              blurOnSubmit={false}
              label='e-mail'
              value={this.state.email}
              returnKeyType="next" 
              theme={{roundness: 30}}
            />
            <TextInput 
              style={{marginVertical: 5}}
              ref={el => (this.password = el)}
              onSubmitEditing={ ()=> this.cpassword.focus()}
              onChangeText={val => this.onChangeText('password', val)}
              placeholder='Password' 
              mode="outlined"
              blurOnSubmit={false}
              label='password'
              value={this.state.password}
              returnKeyType="next" 
              theme={{roundness: 30}}
              secureTextEntry 
            />
            <TextInput 
              style={{marginVertical: 5}}
              ref={el => (this.cpassword = el)}
              onChangeText={val => this.onChangeText('cpassword', val)}
              placeholder='Confirm Password' 
              mode="outlined"
              label='confirm password'
              value={this.state.cpassword}
              returnKeyType="done" 
              theme={{roundness: 30}}
              secureTextEntry 
            />
            <Button
              style={styles.save}
              text='SIGN UP'
              onPress={this.onSignUpButtonPressed}
            />
          </View>
        </View>
        </ScrollView>
      </RkAvoidKeyboard>
    );
  }
}

const mapStateToProps = state => {
  const { signupState } = state;
  return {
    fetching: signupState.fetching.signup,
    success: signupState.success.signup,
    error: signupState.error.signup,
    errorMessage: signupState.error.signupMessage,
  }
}

const mapDispatchToProps = dispatch => ({
  signup: () => dispatch(SignupCreator.signup()),
  signupSuccess: () => dispatch(SignupCreator.signupSuccess()),
  signupFailure: error => dispatch(SignupCreator.signupFailure(error)),
  signupReset: () => dispatch(SignupCreator.signupReset()),
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);