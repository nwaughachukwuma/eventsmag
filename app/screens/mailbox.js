// Home.js
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import {Navigation} from 'react-native-navigation';
import firebase from 'react-native-firebase';
import { goToAuth } from './navigator'
import { USER_KEY } from './config'
import {icons} from 'utils'
import {homeBarBtnActions, rightButtons, leftButtons} from './layouts'

export default class Mailbox extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Inbox'
        },
        drawBehind: false,
        visible: true,
        animate: false,
        leftButtons,
        rightButtons
      }
    };
  }

  constructor(props) {
    super(props);
    this.messageListener = null;
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked
    homeBarBtnActions(buttonId, this.props.componentId);
  }

  componentDidMount() {
    

  }

  componentWillUnmount() {
      
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Mailbox screen.</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'TextScreen',
              }
            });
          }}
          title="View next screen"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})