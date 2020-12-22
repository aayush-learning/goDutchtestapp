import { combineReducers } from 'redux';

import {
  SAVE_NUMBER, SAVE_SETUP, CLEAR_STORE
} from './action';

const intialState = {
  mobileno: '',
  setup: {
    currentProfession: 'student',
    fullname: '',
    upiId: '',
  },
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SAVE_NUMBER:
      return { ...state, mobileno: action.payload };
    case SAVE_SETUP:
      return { ...state, setup: action.payload };
    case CLEAR_STORE:
      return {
        mobileno: '',
        setup: {
          currentProfession: 'student',
          fullname: '',
          upiId: '',
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
