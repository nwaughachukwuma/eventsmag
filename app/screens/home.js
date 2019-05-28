// Home.js
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  Alert,
  StyleSheet,
  FlatList
} from 'react-native'
import {
  RkCard,
  RkText, 
  RkStyleSheet
} from 'react-native-ui-kitten';
import {Navigation} from 'react-native-navigation';
import firebase from 'react-native-firebase';
import { withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-paper';
import {icons, images} from 'utils'
import {homeBarBtnActions, rightButtons, leftButtons} from './layouts'
import { SocialBar } from 'components/socialBar';
import { data } from '../data';
const moment = require('moment');

const rkstyles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  card: {
    marginVertical: 8
  },
  avatar: {
    marginRight: 16,
  },
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export class Home extends Component {

  componentName = 'Home';
  name = 'Home'
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
          // component: {
          //   name: 'example.CustomTopBarTitle',
          //   alignment: 'center'
          // }
        },
        drawBehind: false,
        visible: true,
        animate: false,
        hideOnScroll: true,
        leftButtons,
        rightButtons
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: data.getArticles('post')
    }
    this.messageListener = null;
    Navigation.events().bindComponent(this);
    this.FCM = firebase.messaging();
    this.ref = firebase.firestore().collection("users");
  }

  componentDidMount() {
    this.onTokenRefreshListener = this.FCM.onTokenRefresh(fcmToken => {
        this.ref.doc(this.props.userAuth.uid).update({ 
          pushToken: fcmToken,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
    this.requestMessagingPermission();
    this.storePushToken();

    firebase.database().ref('.info/connected').on('value', snapshot => {
      console.log('presence test ==>', snapshot.toJSON() )
      if (snapshot.val() === true) {
        console.log("presence test ==> connected");
      } else {
        console.log("presence test ==> not connected");
      }
    })
  }

  componentDidUpdate(prevProps, _) {
    if (this.props !== prevProps) {
    
    }
  }

  componentWillUnmount() {
    if (this.messageListener) this.messageListener()
    if (this.unsubscribe) this.unsubscribe()
    if (this.onTokenRefreshListener)  this.onTokenRefreshListener()
  }

  requestMessagingPermission = () => {
    this.FCM.hasPermission()
    .then( enabled => {
      if (!enabled) {
        // user doesn't have permission
        this.FCM.requestPermission()
        .then(() => {})
        .catch( () => {
          // User has rejected permissions  
          Alert.alert(
            'Messaging Permission denied', 
            'EventsApp need permission to send you realtime messages. You authorise this in your device settings.'
          );
        });
      }
    });
    this.messageListener = this.FCM.onMessage( 
      message  =>  Alert.alert('App Alert!', message)
    );
  }

  storePushToken = () => {
     // check to make sure the user is authenticated  
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.FCM.getToken().then(token => {
          this.ref.doc(user.uid).update({ 
            pushToken: token,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
          // works same as redux firebase update methods.
        });
      }
    });
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked
    homeBarBtnActions(buttonId, this.props.componentId);
  }

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => (
    <RkCard style={rkstyles.card}>
      <View rkCardHeader>
        <Avatar.Image
          style={rkstyles.avatar}
          size={36}
          source={item.user.photo}
        />
        <View>
          <RkText rkType='header4'>{`${item.user.firstName} ${item.user.lastName}`}</RkText>
          <RkText rkType='secondary2 hintColor'>{moment().add(item.time, 'seconds').fromNow()}</RkText>
        </View>
      </View>
      <Image rkCardImg source={item.photo} />
      <View rkCardContent>
        <RkText rkType='primary3'>{item.text}</RkText>
      </View>
      <View rkCardFooter>
        <SocialBar />
      </View >
    </RkCard>
  );

  render() {

    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.extractItemKey}
          style={rkstyles.container}
        />
        {/* <Text>Hello from Home screen.</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'TextScreen',
              }
            });
          }}
          title="View next screen"
        /> */}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const {firebase} = state;
  return {
    userProfile: firebase.profile,
    userAuth: firebase.auth
  }
}

export default compose(
  withFirebase,
  connect(mapStateToProps, null)
)(Home)