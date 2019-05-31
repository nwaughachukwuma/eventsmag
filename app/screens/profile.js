import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import {Navigation} from 'react-native-navigation';
import { Gallery, Button } from 'components';
import { Avatar } from 'react-native-paper';
import { data } from '../data';
import formatNumber from 'utils/textUtils';
import {icons} from 'utils'
import { AppBarBtnActions } from './layouts'

export class Profile extends React.Component {
  
  componentName = 'Profile';
  name = 'Profile'
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Profile',
        },
        drawBehind: false,
        visible: true,
        animate: true,
        rightButtons: [
          {
            id: 'profileSettingsBtn',
            // icon: icons.user,
            icon: icons.platformIcons.settings,
            color: 'white',
            disabledColor: 'gray',
            size: 10,      
            buttonFontSize: 15,
            buttonFontWeight: '600',
          }
        ]
      },
      layout: {
        backgroundColor: 'white'
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: data.getUser(),
    };
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    AppBarBtnActions(buttonId, this.props.componentId);
  }

  onFollowButtonPressed = () => {
    alert('am pressed')
  }

  render = () => (
    <ScrollView style={styles.root}>
      <View style={[styles.header, styles.bordered]}>
        <Avatar.Image  
          size={90}
          source={this.state.data.photo}
          // source={{uri: path/to/user/image}}
          style={{marginBottom: 10}}
        /> 
        <RkText rkType='header2'>{`${this.state.data.firstName} ${this.state.data.lastName}`}</RkText>
        <Button
          style={styles.button}
          text='FOLLOW'
          color="#f45342"
          onPress={this.onFollowButtonPressed}
        />
      </View>

      <View style={styles.userInfo}>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.postCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Posts</RkText>
        </View>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{formatNumber(this.state.data.followersCount)}</RkText>
          <RkText rkType='secondary1 hintColor'>Followers</RkText>
        </View>
        <View style={styles.section}>
          <RkText rkType='header3' style={styles.space}>{this.state.data.followingCount}</RkText>
          <RkText rkType='secondary1 hintColor'>Following</RkText>
        </View>
      </View>
      <Gallery items={this.state.data.images} />
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    marginTop: 18,
    alignSelf: 'center',
    width: 140,
  },

}));

export default Profile;
