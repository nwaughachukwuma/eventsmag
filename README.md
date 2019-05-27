# EventsMag
#### Create and share beautiful moments

`This codebase is aimed as a starter for any React Native Project with needs for navigation, auth, state mangement, database & storage, ready built components and themes`

The project is highly opinionated based on my approach to building React Native apps and based on the integrations and tools I consider to be important to my work. I have made decisions for certain key libraries over the other because of the ease and performance they bring to the App. Find below a list of the key integrations in this project. Feel free to fork this project and use as you desire.

- React Native Navigation: this is used as the navigation library because it provides easy and customizable options for navigation. It also makes nav appear seemless as it integrates well with the native code. Read more here: [RN-Navigation](https://wix.github.io/react-native-navigation/)
- React Native Paper: this is a material design library for react native and provides so many reusable components. Link is here [RN-Paper](https://github.com/callstack/react-native-paper)
- React native firebase: this is a popular firebase library for react native as it provides key firebase integrations for firestore, Mlkit, cloud functions, cloud messaging etc. Find more here [RN-Firebase](https://github.com/invertase/react-native-firebase)
- React-Redux-Firebase: this library is a redux binding for firebase and includes higher order component for use with react. It provides wrapper and recipes for auth, firestore, RDB, queries etc (storage all firebase) and for redux-persist, saga and thunk. Find it here: [React-Redux-Firebase](https://github.com/prescottprue/react-redux-firebase). You will also need [Redux Firestore](https://github.com/prescottprue/redux-firestore
) if you want to use cloud firestore over real-time database
- React Native UI kitten and Kitten tricks: this package provides extra UI components for a react native app. I have used it because it has many prebuilt screens which reduces development time. Find more here [UI Kitten](https://akveo.github.io/react-native-ui-kitten/
) and  [Kitten Trick](https://github.com/akveo/kittenTricks)
- Other libraries: I am building this project called EventsMag and am using following libraries
  - React-Native-Image-Crop-Picker [RNICP](https://github.com/ivpusic/react-native-image-crop-picker)
  - React-Native-Video: [RN-Video](https://github.com/react-native-community/react-native-video)
  - MerryJS Photo viewer [MerryJS](https://github.com/merryjs/photo-viewer)
  - React-Native-Vector-Icons [RNVI](https://github.com/oblador/react-native-vector-icons)

Like I said, this project is highly opinionated and I only chose to make it public because I know a lot of new React Native developers find it difficult to integrate some of the libraries used here, especially React Native Navigation. Please feel free to strip the project down to what you need by removing unnecessary libraries and leaving only what you need.

This is a pet project, so feel free to join me in building it by asking for the scope and description document before issuing a PR.

`Remember that you'll need a firebase project setup to use firebase with react-native-firebase and react-redux-firebase, and would need to add your google-services.json file to ~/android/app/ path`
> The project as is already has authentication taken care of with auth reducers and auth logic for signup, login and password recovery.

I will love to hear from you about your challenges using this project, or your suggestions on better way to go about the integrations.

**Author**
- [Chukwuma Nwaugha](https://github.com/nwaughachukwuma)
