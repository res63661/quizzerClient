import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import {compose, applyMiddleware, combineReducers, createStore} from 'redux'
import * as actions from './redux/actions/actions';
import QuizReducer from './redux/reducers/quizReducer'
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import 'isomorphic-fetch'
import testMiddleware from './testMiddleware'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


const rootReducer = combineReducers({
  quiz: QuizReducer,
  form: formReducer
});

const store = createStore(rootReducer,
  compose(applyMiddleware(
    //thunk
    testMiddleware
  )));

//See https://alligator.io/testing/asynchronous-testing-jest/ for async done() call universe juice.
it('pulls all subjects', (done)=>{
  let dispatch = ()=>null;
  let subjects = actions.getAllSubjects_fetch1()
  .then(res=>res.json())
  .then(json=>{
    let r = json;
    done();
  });

  //   store.subscribe(handleChange);
  // let output = store.dispatch(subjects);  

  
  
});

function handleChange(){
  //Check state.
  let state = store.getState();
}