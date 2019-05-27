import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  signup: null,
  signupSuccess: null,
  signupFailure: ['error'],
  signupReset: null,
});

export const SignupTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: {
    signup: false,
  },
  success: {
    signup: false,
  },
  error: {
    signup: false,
    signupMessage: '',
  }
};

/* ------------- Reducers ------------- */
const signup = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    signup: true,
  },
  success: {
    ...state.success,
    signup: false,
  },
  error: {
    ...state.error,
    signup: false,
    signupMessage: '',
  },
});

const signupSuccess = (state) => ({
  ...state,
  fetching: {
    ...state.fetching,
    signup: false,
  },
  success: {
    ...state.success,
    signup: true,
  }
});

const signupFailure = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    signup: false,
  },
  error: {
    ...state.error,
    signup: true,
    signupMessage: action.error,
  },
});

const signupReset = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    signup: false,
  },
  success: {
    ...state.success,
    signup: false,
  },
  error: {
    ...state.error,
    signup: false,
    signupMessage: '',
  }
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP]: signup,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure,
  [Types.SIGNUP_RESET]: signupReset,
});
