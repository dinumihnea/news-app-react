import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/'

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);
