import {
  takeLatest, put, all,
} from 'redux-saga/effects';

import {
  SAGA, SAVE_NUMBER, SAVE_SETUP,
  CLEAR_STORE
} from './action';

function* saveNumber({ payload }) {
  try {
    yield put({ type: SAVE_NUMBER, payload });
  } catch (error) {
    // catch block
  }
}

function* setup({ payload }) {
  try {
    yield put({ type: SAVE_SETUP, payload });
  } catch (error) {
    // catch block
  }
}


function* clear({ }) {
  try {
    yield put({ type: CLEAR_STORE });
  } catch (error) {
    // catch block
  }
}

export function* saveNumberWatcherSaga() {
  yield takeLatest(SAVE_NUMBER + SAGA, saveNumber);
}
export function* setupWatcherSaga() {
  yield takeLatest(SAVE_SETUP + SAGA, setup);
}

export function* clearWatcherSaga() {
  yield takeLatest(CLEAR_STORE + SAGA, clear);
}

function* rootSaga() {
  yield all([saveNumberWatcherSaga(), setupWatcherSaga(), clearWatcherSaga()]);
}

export default rootSaga;
