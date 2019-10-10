import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware  from 'redux-saga'
import mySage from './sagas'
 
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySage)

export default  store