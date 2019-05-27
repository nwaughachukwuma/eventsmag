import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  login: null,
  loginSuccess: null,
  loginFailure: ['error'],
  loginReset: null,
  // reset password actions
  resetPassword: null,
  resetPasswordSuccess: null,
  resetPasswordFailure: ['error'],
  resetPasswordReset: null,
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: {
    login: false,
    resetPassword: false
  },
  success: {
    login: false,
    resetPassword: false
  },
  error: {
    login: false,
    resetPassword: false,
    loginMessage: '',
    resetMessage: false
  }
};

/* ------------- Reducers ------------- */
const login = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    login: true,
  },
  success: {
    ...state.success,
    login: false,
  },
  error: {
    ...state.error,
    login: false,
    loginMessage: '',
  },
});

const loginSuccess = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    login: false,
  },
  success: {
    ...state.success,
    login: true,
  },
});

const loginFailure = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    login: false,
  },
  error: {
    ...state.error,
    login: true,
    loginMessage: action.error,
  },
});

const loginReset = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    login: false,
  },
  success: {
    ...state.success,
    login: false,
  },
  error: {
    ...state.error,
    login: false,
    loginMessage: '',
  }
});

// reset password reducer
const resetPassword = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    resetPassword: true,
  },
  success: {
    ...state.success,
    resetPassword: false,
  },
  error: {
    ...state.error,
    resetPassword: false,
    resetMessage: '',
  },
});

const resetPasswordSuccess = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    resetPassword: false,
  },
  success: {
    ...state.success,
    resetPassword: true,
  },
});

const resetPasswordFailure = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    resetPassword: false,
  },
  error: {
    ...state.error,
    resetPassword: true,
    resetMessage: action.error,
  },
});

const resetPasswordReset = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    resetPassword: false,
  },
  success: {
    ...state.success,
    resetPassword: false,
  },
  error: {
    ...state.error,
    resetPassword: false,
    resetMessage: '',
  }
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGIN_RESET]: loginReset,
  // reset password types
  [Types.RESET_PASSWORD]: resetPassword,
  [Types.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
  [Types.RESET_PASSWORD_FAILURE]: resetPasswordFailure,
  [Types.RESET_PASSWORD_RESET]: resetPasswordReset,
});
