# EventsMag
#### Create and share beautiful moments
`This codebase is aimed as a starter for any React Native Project with needs for navigation, auth & state management, database & storage, ready built components and themes`

<img src="https://dl.dropbox.com/s/4ovnfdj8r7j86cm/Image%201.png?dl=0" width="200px" /> <img src="https://dl.dropbox.com/s/0cduinlggz0j986/Image%202.png?dl=0" width="200px" />

<img src="https://dl.dropbox.com/s/4ovnfdj8r7j86cm/Image%201.png?dl=0" width="300px" /> <img src="https://dl.dropbox.com/s/0cduinlggz0j986/Image%202.png?dl=0" width="300px" />

### Note: 
1. This project is optimized for Android, IOS and Windows optimized versions are in the works 
2. Master branch contains extraneous files and artefacts you do not need, so please use the public-access branch found here: https://github.com/nwaughachukwuma/eventsmag/tree/public-access

### Installation:
> git clone https://github.com/nwaughachukwuma/eventsmag.git <directory-name> -b public-access

The project is highly opinionated based on my approach to building React Native apps and based on the integrations and tools I consider to be important to my work. I have made decisions for certain key libraries over others because of the ease and performance they bring to an App. Find below a list of the key integrations in this project. Feel free to fork this project and use as you desire.

- React Native Navigation: this is used as the navigation library because it provides easy and customizable options for navigation. It also makes nav appear seemless as it integrates well with the native code. Read more here: [RN-Navigation](https://wix.github.io/react-native-navigation/)
- React Native Paper: this is a material design library for react native and provides so many reusable components. Link is here [RN-Paper](https://github.com/callstack/react-native-paper)
- React native firebase: this is a popular firebase library for react native as it provides key firebase integrations for firestore, Mlkit, cloud functions, cloud messaging etc. Find more here [RN-Firebase](https://github.com/invertase/react-native-firebase)
- React-Redux-Firebase: this library is a redux binding for firebase and includes higher order component for use with react. It provides wrapper and recipes for auth, firestore, RDB, queries, storage etc (all firebase) and for redux-persist, saga and thunk. Find it here: [React-Redux-Firebase](https://github.com/prescottprue/react-redux-firebase). You will also need [Redux Firestore](https://github.com/prescottprue/redux-firestore
) if you want to use cloud firestore over real-time database
- React Native UI kitten and Kitten tricks: this package provides extra UI components for a react native app. I have used it because it has many prebuilt screens which reduces development time. Find more here [UI Kitten](https://akveo.github.io/react-native-ui-kitten/
) and  [Kitten Trick](https://github.com/akveo/kittenTricks)
- Other libraries: I am building this App called EventsMag and am using the following libraries
  - React-Native-Image-Crop-Picker [RNICP](https://github.com/ivpusic/react-native-image-crop-picker)
  - React-Native-Video: [RN-Video](https://github.com/react-native-community/react-native-video)
  - MerryJS Photo viewer [MerryJS](https://github.com/merryjs/photo-viewer)
  - React-Native-Vector-Icons [RNVI](https://github.com/oblador/react-native-vector-icons)

Like I said, this project is highly opinionated and I only chose to make it public because I know a lot of new React Native developers find it difficult to integrate some of the libraries used here, especially React Native Navigation. Please feel free to strip the project down to what you need by removing unnecessary libraries and leaving only what you need.

This is a pet project, so feel free to join me in building it by asking for the scope and description document before issuing a PR.

`Remember that you'll need a firebase project setup to use firebase with react-native-firebase and react-redux-firebase, and you would need to add your project's google-services.json file to ~/android/app/ path`
> The project as is already has authentication taken care of with auth reducers and auth logic for signup, login and password recovery. If you follow the note above, this should work out of the box for you.

I will love to hear about your challenges using this project, or your suggestions on a better way to go about the integrations.

## Todo
[ ] Testing with Jest and Enzyme
[ ] Build project for IOS and Windows


**Author**
- [Chukwuma Nwaugha](https://github.com/nwaughachukwuma)

<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png?v8" width="30px" /> <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f389.png?v8" width="30px" />


