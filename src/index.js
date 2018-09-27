import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

import {agentContact} from './actions/agent';



const store = configureStore();


const state = store.getState();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
