import { Platform } from 'react-native'
export const icons = {
    home: require('assets/icons/home.png'),
    login: require('assets/icons/log-in.png'),
    logout: require('assets/icons/log-out.png'),
    userPlus: require('assets/icons/user-plus.png'),
    activity: require('assets/icons/activity.png'),
    airplay: require('assets/icons/airplay.png'),
    folder: require('assets/icons/folder.png'),
    mail: require('assets/icons/mail.png'),
    key: require('assets/icons/key.png'),
    google: require('assets/icons/google.png'),
    facebook: require('assets/icons/facebook.png'),
    twitter: require('assets/icons/twitter.png'),
    menu: require('assets/icons/menu.png'),
    video_outline: require('assets/icons/video-outline.png'),
    search: require('assets/icons/search.png'),
    user: require('assets/icons/user.png'),
    users: require('assets/icons/users.png'),
    fire: require('assets/icons/fire.png'),
    event: require('assets/icons/calendar-outline.png'),
    account_switch: require('assets/icons/account-switch.png'),    
    settings: require('assets/icons/settings.png'),
    arrow_left: require('assets/icons/arrow-left.png'),
    platformIcons: {
        ...Platform.select({
            // these icons are from android/app/.../res folder
            // they are used cause they load fast and resize for 
            // different device pixel densities
            android: {
                menu: {uri: 'ic_action_menu'},
                menu_light: {uri: 'ic_action_menu_light'},
                person: {uri: 'ic_action_person_outline'},
                person_light: {uri: 'ic_action_person_outline_light'},
                user: {uri: 'ic_action_user'},
                user_plus: {uri: 'ic_action_user_plus'},
                users: {uri: 'ic_action_users'},
                search: {uri: 'ic_action_search'},
                search_light: {uri: 'ic_action_search_light'},
                video: {uri: 'ic_action_videocam'},
                video_light: {uri: 'ic_action_videocam_light'},
                settings: {uri: 'ic_action_settings'},
                arrow_left: {uri: 'ic_action_arrow_left'},
            },
            // you should add same icons to Xcode asset catalogs to get same result
            // for now, am going to return the icons in ~projectRoot~/app/assets (JS side) folder 
            ios: {
                video_light: require('assets/icons/video-outline.png'),
                search_light: require('assets/icons/search.png'),
                person_light: require('assets/icons/user.png'),
                menu_light: require('assets/icons/menu.png'),
                user: require('assets/icons/user.png'),
                settings: require('assets/icons/settings.png'),
                arrow_left: require('assets/icons/arrow-left.png'),
            }
        })
    }
}

export default icons