import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import setHouse from './setHouse';

const persistConfig = {
  key: 'root',
  storage,
  version:1
};

const reducer = combineReducers({
    house:setHouse
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});