import * as types from '../actions/types'

const subjectsList = [
    {
        subject: 'javascript',
        isChecked: false,
        subjectId: 0
    },
    {
        subject: 'react',
        isChecked: false,
        subjectId: 1
    },
]

export default function QuizReducer(state={subjectsList}, action){
    switch(action.type){
        case types.getAllSubjects:
            return {...state, subjectsList: action.payload}
        case types.getAllSubjectsSuccess:
            return {...state, subjectsList: action.payload}
    }

    return state;
}