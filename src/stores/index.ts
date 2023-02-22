import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import rootSaga from './sagas';
import logger from '@middleware/logger';

// redux-persist
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));

// persist the store
const persistor = persistStore(store);
// Run the saga
sagaMiddleware.run(rootSaga);

export type RootDispatch = typeof store.dispatch;

export { persistor, store };
