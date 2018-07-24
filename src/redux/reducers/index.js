import QuizReducer from './quizReducer'
import {compose, applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    quiz: QuizReducer,
    form: formReducer
});


//Add redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)));

export default store;