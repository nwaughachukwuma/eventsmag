import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import configureStore from './configureStore'
import { reducer as loginReducer } from './login';
import { reducer as signupReducer } from './signup';

export const reducers = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    loginState: loginReducer,
    signupState: signupReducer,
    // add more reducers
})

const rootReducer = reducers;
export const { store, persistor } = configureStore(rootReducer);
export default store;