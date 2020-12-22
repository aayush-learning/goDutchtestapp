const SAGA = 'SAGA';
const SAVE_NUMBER = 'SAVE_NUMBER';
const SAVE_SETUP = 'SAVE_SETUP';
const CLEAR_STORE = 'CLEAR_STORE';

const saveNumber = (number) => {
  return {
  type: SAVE_NUMBER + SAGA,
  payload: number,
}
};

const setup = (setUpdata) => {
  return {
  type: SAVE_SETUP + SAGA,
  payload: setUpdata,
}
};

const clearStore = () => {
  return{
    type: CLEAR_STORE + SAGA
  }
}

export {
  SAGA, SAVE_NUMBER, SAVE_SETUP, CLEAR_STORE, saveNumber, setup, clearStore
};
