import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),    
//   },
// });

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // 직렬화 가능 여부 체크를 비활성화 (redux-persist에서 필요)
  }),
});

export default store;
