import * as types from './types'



export function getAllSubjectsSuccess(dispatch, json) {
    // return (dispatch)=>{
    //     return dispatch({
    //         type: types.getAllSubjectsSuccess,
    //         payload: {}
    //     })
    // }
    dispatch({
        type: types.getAllSubjectsSuccess,
        payload: json
    })
}

/*Dispatch the update action*/
export function updateSubject(subject) {
    return (dispatch) => {
        return dispatch({
            type: types.updateSubject,
            payload: subject
        })
    }
}

export function getAllSubjects_fetch1(){
    return fetch('http://localhost:8080/subject', {
        mode: 'cors',
        headers: { "Content-Type": "application/json; charset=utf-8" }
    })
}

export function getAllSubjects_fetch(dispatch, success, fail) {
    return fetch('http://localhost:8080/subject', {
        mode: 'cors',
        headers: { "Content-Type": "application/json; charset=utf-8" }
    })
        .then(res => res.json())
        .then(json => success(json))
        .catch(err => {
                //Could call fail here but this time just handling direct.
                dispatch({
                    type: types.getAllSubjectsFail,
                    payload: err
                })
            }
        )
}

export function getAllSubjects() {
    return (dispatch) => {
        getAllSubjects_fetch(dispatch, getAllSubjectsSuccess, null);
    }
}

export function getQuestionsBySubjects_fetch(subjectsList) {
    //http://localhost:8080/question?q={"$or": [{"subject": "12"}, {"subject": "132"}]}
    let subjects = subjectsList.map((s)=>({subject: s}));
    let sfinal = subjects.map(s=>JSON.stringify(s)).join(',')
    let url = `http://localhost:8080/question?q={"$or": [${sfinal}]}`

    return fetch(url, {
        mode: 'cors',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
}

//Get questions by subjects list.
export function getQuestionsBySubjects(subjectsList) {
    return (dispatch) => {
        return getQuestionsBySubjects_fetch(subjectsList)
            .then(res => res.json())
            .then(json => dispatch({
                type: types.getQuestionsBySubjectsSuccess,
                payload: json
            }))
            .catch(err => dispatch({
                type: types.getQuestionsBySubjectsFAIL,
                payload: err
            }))
    }
}