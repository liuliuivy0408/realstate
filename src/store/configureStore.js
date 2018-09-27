import { createStore, combineReducers } from 'redux';
import housingsReducer from '../reducers/housings';
import agentReducer from '../reducers/agent';

export default () => {
    const store = createStore(
        combineReducers({
            housings: housingsReducer,
            agents:agentReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};