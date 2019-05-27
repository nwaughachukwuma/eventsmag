import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    storeUserEntity: ['userDetails', 'loginProvider'],
    storeUserEntitySuccess: ['response'],
    storeUserEntityFailure: ['error'],
    storeUserEntityReset: null,
});

export const UserEntityTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  fetching: {
    storeUserEntity: false,
  },
  success: {
    storeUserEntity: false,
  },
  error: {
    storeUserEntity: false,
    storeMessage: '',
  },
  userDetails: {},
};

/* ------------- Reducers ------------- */
const storeUserEntity = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    storeUserEntity: true,
  },
  success: {
    ...state.success,
    storeUserEntity: false,
  },
  error: {
    ...state.error,
    storeUserEntity: false,
    storeMessage: '',
  },
});

const storeUserEntitySuccess = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    storeUserEntity: false,
  },
  success: {
    ...state.success,
    storeUserEntity: true,
  },
  userDetails: action.response,
});

const storeUserEntityFailure = (state, action) => ({
  ...state,
  fetching: {
    ...state.fetching,
    storeUserEntity: false,
  },
  error: {
    ...state.error,
    storeUserEntity: true,
    storeMessage: action.error,
  },
});

const storeUserEntityReset = state => ({
  ...state,
  fetching: {
    ...state.fetching,
    storeUserEntity: false,
  },
  success: {
    ...state.success,
    storeUserEntity: false,
  },
  error: {
    ...state.error,
    storeUserEntity: false,
    storeMessage: '',
  },
  userDetails: {}
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORE_USER_ENTITY]: storeUserEntity,
  [Types.STORE_USER_ENTITY_SUCCESS]: storeUserEntitySuccess,
  [Types.STORE_USER_ENTITY_FAILURE]: storeUserEntityFailure,
  [Types.STORE_USER_ENTITY_RESET]: storeUserEntityReset,
});
