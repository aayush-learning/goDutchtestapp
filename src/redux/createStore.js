import AsyncStorage from '@react-native-community/async-storage';
import {
  persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistCustomReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

const createStore = () => {
  const store = configureStore({
    reducer: persistCustomReducer,
    middleware: [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      ...middlewares,
    ],
    // devTools: process.env.NODE_ENV !== 'production' ,
  });
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
};

export default createStore;
