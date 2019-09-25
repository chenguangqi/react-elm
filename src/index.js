import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import './index.css';
//import App from './App';
import todoApp from './reducers';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

//import Router from './router';
//import App from './demo2';
//ReactDOM.render(<App />, document.getElementById('root'));

let store = createStore(todoApp);
render(
	<Provider store={store}>
	<App />
	</Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
