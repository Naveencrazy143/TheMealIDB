import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware ,combineReducers,compose} from 'redux'
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import AuthReducers from './Redux/AuthReducer/index,';
import mySaga from './Redux/Saga';
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  AuthReducers,
 })
 const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>

  </React.StrictMode>
);
reportWebVitals();
