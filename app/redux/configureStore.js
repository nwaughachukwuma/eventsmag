import { compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import RNFirebase from 'react-native-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';

// redux-firebase integration
const reactNativeFirebaseConfig = {
  debug: true,
};
const reduxFirebaseConfig = {
  userProfile: 'users', // save users profiles to 'users' collection
  useFirestoreForProfile: true, // make false if you need to use Firebase RDB
  // enable to know the list of online users. this works better when using RDB and not firestore.
  // Am using firestore as users and events DB, and manually saving to presence path in RDB
  // I haven't figured out how to make sessions work with this approach. 
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions', // where list of user sessions is stored in database (presence must be enabled)
};

export default (rootReducer, initialState = { firebase: {}, firestore: {} }) => {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    debug: true,
  };

  // configure redux-firebase
  const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);
  // persist reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, reduxFirebaseConfig),
      reduxFirestore(firebase),
      // applyMiddleware can be placed here
    ),
  );
  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    module.hot.accept(() => store.replaceReducer(rootReducer));
  }
  return { store, persistor };
};
