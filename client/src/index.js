import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import 'react-bootstrap';

import reducers from './reducers';




const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store = {store}><App /></Provider>
	, document.querySelector('#root'));