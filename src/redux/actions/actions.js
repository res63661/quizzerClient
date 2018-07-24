import * as types from './types'



export function getAllSubjects(){
    return (dispatch)=>{
        return dispatch({
            type: types.getAllSubjectsSuccess,
            payload: {}
        })
    }
}