import React, {Component} from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    FlatList, 
    Alert,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-paper'
import { Grid, Row } from 'react-native-easy-grid'
import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from 'react-native-navigation';
import { withFirebase, isEmpty } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import {icons} from 'utils'
import { goToAuth } from '../navigator'
import { USER_KEY } from '../config'
import {homeBarBtnActions, otherLeftButtons} from '../layouts'


const styles = StyleSheet.flatten({
    icon: {
        width: 18,
        marginTop: 3,
    },
    rnvicon: {
        width: 18,
    },
    sidebarItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: '85%', // <---
        paddingLeft: 30,
        paddingTop: 10,
    },
    logout: {
        padding: 10,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        height: 40,
        color: '#454F63',
        paddingRight: 200,
        marginTop: 15,
    },
    iconText: {
        padding: 10,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        height: 40,
        color: '#454F63',
    },
    nameText: {
        color: '#FFF',
        marginTop: 8,
        marginBottom: 5,
        fontFamily: 'Roboto-Medium',
    },
    emailText: {
        color: '#FFF',
        fontSize: 12,
        fontFamily: 'Roboto-Medium',
    },
    switch: {
        height: 20,
        marginTop: 40,
        marginRight: 10,
        alignself: 'center'
    },
    presence: {
        marginTop: 40,
        marginRight: 15,
        fontSize: 12,
        fontFamily: 'Roboto-Medium',
        color: 'white'
    }
});

const sidebar_items = [
    { 
        key: 'My Events', 
        icon: 'calendar', 
        route: null, // 'PaymentLog' 
    },
    {
        key: 'My Activity',
        icon: 'activity',
        route: null //'MyActivity',
    },
    {
        key: 'Profile',
        icon: 'user',
        route: 'Profile',
    },
    {
        key: 'Friends',
        icon: 'users',
        route: null, // 'Friends',
    },
    { 
        key: 'Help', 
        icon: 'help-circle', 
        route: null, // 'Help' 
    },
];

export class Drawer extends Component {

    componentName = 'Drawer'
    name = 'Drawer'
    constructor(props) {
        super(props)
        this.state = {
            presence: 'Offline'
        }
    }

    static get options() {
        return {
          topBar: {
                title: {
                    text: 'Drawer'
                },
                visible: false,
                drawBehind: true,
                animate: false
            },
            layout: {
                backgroundColor: 'white',
            } 
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            const {presence, userAuth} = this.props
            if ( isEmpty(userAuth) ) {
                goToAuth();
            }
            if (presence) {
                this.setState({ 
                    presence: presence[userAuth.uid]
                })
            }
        }
    }

    signOut = async () => {
        try {
            // clear any data in global storage
            await AsyncStorage.removeItem(USER_KEY)
            await this.props.firebase.logout();
            goToAuth();
        } catch (err) {
            Alert.alert('Logout error', 'Something went wrong');
        }
    }

    render() {
        const { userProfile, userAuth, componentId } = this.props;
        const { presence } = this.state;
        const presenceIndicator = presence === 'online'? '#e59400': 'purple'
        
        return (
            <Grid style={{ display: 'flex', backgroundColor: '#FFF' }}>
                <Row size={1}>
                    <LinearGradient
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        colors={['#329999', '#008080']}
                    >
                        <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                paddingLeft: 30,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {}}
                                activeOpacity={0.8}
                                style={{
                                    flexGrow: 1,
                                }}
                            >
                                <View
                                    style={{
                                        flexGrow: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Avatar.Icon  
                                        size={70}
                                        icon="person"
                                        // source={icons.user}
                                        // source={{uri: path/to/user/image}}
                                        style={{
                                            height: '70%', width: '30%',   
                                            marginTop: 25,
                                        }}
                                    />       
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Text
                                            style={[styles.presence, {color: presenceIndicator }]}
                                        >
                                            {presence}
                                        </Text>
                                    </View>
                                </View>                      
                                <View style={{ marginBottom: 10 }}>
                                    <Text
                                        adjustsFontSizeToFit
                                        style={styles.nameText}
                                    >
                                        { userProfile.name }
                                    </Text>
                                    <Text
                                        adjustsFontSizeToFit
                                        style={styles.emailText}
                                    >
                                        {userProfile.email}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>   
                    </LinearGradient>                     
                </Row>
                <Row size={2} style={{ marginVertical: 10, paddingLeft: 30 }}>
                    <FlatList
                        data={sidebar_items}
                        style={{ marginBottom: 20 }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    if (item.route) {
                                        Navigation.mergeOptions(componentId, {
                                            sideMenu: {
                                              left: {
                                                visible: false
                                              }                                        
                                            }
                                        });                  
                                        // sideMenuCenter
                                        // Navigation.push('HomeBottomTabsId', {
                                        //     stack: {
                                        //         children: [{
                                        //             component: {
                                        //                 name: 'Home',
                                        //             },
                                        //             component: {
                                        //                 name: 'Profile',
                                        //             }
                                        //         }]
                                        //     }                                            
                                        // });
                                        

                                        Navigation.showModal({
                                            stack: {
                                              children: [{
                                                component: {
                                                  name: 'Profile',
                                                  passProps: {
                                                    text: 'stack with one child'
                                                  },
                                                  options: {
                                                    topBar: {
                                                      title: {
                                                        text: 'Profile'
                                                      },
                                                      leftButtons: otherLeftButtons
                                                    }
                                                  }
                                                }
                                              }]
                                            }
                                        });
                                        
                                    } else {
                                        alert('am pressed')
                                    }                                    
                                }}
                                style={[
                                    styles.sidebarItem,
                                    {bottom: 5, marginVertical: 5},
                                ]}
                            >
                                <Icon
                                    name={item.icon}
                                    size={15}
                                    style={styles.rnvicon}
                                />
                                <Text
                                    style={styles.iconText}
                                >
                                    {item.key}
                                </Text>
                            </TouchableOpacity>
                        )}
                        ref={el => (this.sidebarRef = el)}
                        onEndReached={() => this.sidebarRef.flashScrollIndicators()}
                        onEndReachedThreshold={0.2}
                    />
                    <TouchableOpacity
                        onPress={this.signOut}
                        style={[ styles.sidebarItem, styles.logoutContainer]}
                    >
                        <Icon
                            name="log-out"
                            style={[styles.icon, { marginTop: 15 }]}
                        />
                        <Text
                            style={styles.logout}
                        >
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        );
    }
    
}

const mapStateToProps = state => {
    const { firebase } = state;
    return {
        userAuth: firebase.auth,
        userProfile: firebase.profile,
        presence: firebase.data.presence
    }
}
const mapDispatchToProps = dispatch => ({
    // add dispatch methods here
})
export default compose(
    withFirebase,
    connect(mapStateToProps, mapDispatchToProps)
)(Drawer);