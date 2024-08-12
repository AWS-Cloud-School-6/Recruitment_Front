import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import reducer from "./userSlice"

// 스토어를 export 해줘야한다. (안그럼 PersistGate가 store를 못 읽는다) 
export let persistor = persistStore(store); 


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>
    <App /> 
    </PersistGate>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
