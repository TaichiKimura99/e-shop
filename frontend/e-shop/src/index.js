import React from 'react';
import './index.css';
//containerを入れる
import App from './containers/App';
import AppAllResult from './containers/AppAllResult';
import {createStore,applyMiddleware} from 'redux';
import reportWebVitals from './reportWebVitals';
import appReducer from './reducers/App'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { render } from 'react-dom';
import {Provider} from 'react-redux';

const store = createStore(
  appReducer
  );

render(
  <Provider store ={store}>
    <Router>
      <Route exact path = "/" component={App}/>
      <Route path = "/items" component={AppAllResult} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
