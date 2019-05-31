import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Keyboard
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { Avatar } from 'react-native-paper';
import { data } from '../data';
import {
  SocialSetting,
  Button,
} from 'components';
import { FontAwesome } from 'assets/icons';
import {KittenTheme as theme} from '../config/theme'

export class ProfileSettings extends React.Component {
  
  componentName = 'Profile Settings';
  name = 'Profile Settings'
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Profile Settings',
        },
        drawBehind: false,
        visible: true,
        animate: true,
      },
    };
  }

  constructor(props) {
    super(props);
    
    this.user = data.getUser();
    this.state = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      country: this.user.country,
      phone: this.user.phone,
      password: this.user.password,
      newPassword: this.user.newPassword,
      confirmPassword: this.user.confirmPassword,
    };
  }


  onFirstNameInputChanged = (text) => {
    this.setState({ firstName: text });
  };

  onLastNameInputChanged = (text) => {
    this.setState({ lastName: text });
  };

  onEmailInputChanged = (text) => {
    this.setState({ email: text });
  };

  onCountryInputChanged = (text) => {
    this.setState({ country: text });
  };

  onPhoneInputChanged = (text) => {
    this.setState({ phone: text });
  };

  onPasswordInputChanged = (text) => {
    this.setState({ password: text });
  };

  onNewPasswordInputChanged = (text) => {
    this.setState({ newPassword: text });
  };

  onConfirmPasswordInputChanged = (text) => {
    this.setState({ confirmPassword: text });
  };

  onSaveButtonPressed = () => {
    alert('save button pressed')
  }

  render = () => (
    <RkAvoidKeyboard
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}
    >
      <ScrollView style={styles.root}>
        <View style={styles.header}>
          <Avatar.Image  
            size={90}
            source={this.user.photo}
            // source={{uri: path/to/user/image}}
            style={{marginBottom: 10}}
          /> 
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='header6 primary' style={styles.titleText}>INFO</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='First Name'
              value={this.state.firstName}
              rkType='right clear'
              onChangeText={this.onFirstNameInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Last Name'
              value={this.state.lastName}
              onChangeText={this.onLastNameInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Email'
              value={this.state.email}
              onChangeText={this.onEmailInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Country'
              value={this.state.country}
              onChangeText={this.onCountryInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Phone'
              value={this.state.phone}
              onChangeText={this.onPhoneInputChanged}
              rkType='right clear'
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6' style={styles.titleText}>CHANGE PASSWORD</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Old Password'
              value={this.state.password}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='New Password'
              value={this.state.newPassword}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onNewPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Confirm Password'
              value={this.state.confirmPassword}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onConfirmPasswordInputChanged}
            />
          </View>
        </View>
       
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6' style={styles.titleText}>CONNECT YOUR ACCOUNT</RkText>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Twitter' icon={FontAwesome.twitter} tintColor={theme.colors.twitter} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Google' icon={FontAwesome.google} tintColor={theme.colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Facebook' icon={FontAwesome.facebook} tintColor={theme.colors.facebook} />
          </View>
        </View>
        <Button
          style={styles.button}
          text='SAVE'
          color="#f45342"
          onPress={this.onSaveButtonPressed}
        /> 
      </ScrollView>
    </RkAvoidKeyboard>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25,
    alignItems: 'center'
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  titleText: {
    color: '#f45342'
  }
}));

export default ProfileSettings;
