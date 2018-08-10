// export default function ({ dispatch }) {
//     return next => action => {
//         /*If action doesn'
//         t have payload or 
//         payload not hava  .then property we 
//         dont care so send on*/        
//         if (!action.payload || !action.payload.then) {
//             return next(action);
//         }

//         console.log('Promise', action);

//         //Make sure action's promise respolves
//         action.payload.then(function(response){
//             const newAction = {...action, payload: response.data};
//             dispatch(newAction);
//         });
//     }
// }



function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }
  
      return next(action);
    };
  }
  
  const thunkTest = createThunkMiddleware();
  thunkTest.withExtraArgument = createThunkMiddleware;
  
  export default thunkTest;