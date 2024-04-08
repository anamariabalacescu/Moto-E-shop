import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { userReducer } from './reducers/userReducers';
import { orderReducer } from './reducers/orderReducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
} from "react-router-dom"
import './index.css';

const rootReducer = combineReducers({
  user: userReducer,
  orders: orderReducer
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

