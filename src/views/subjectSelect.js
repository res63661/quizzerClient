import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../redux/actions/actions'
import CbList from '../containers/cbList'

class SubjectSelect extends React.Component{

    componentWillMount(){
//        this.props.getAllSubjects();
    }

    render(){
        console.log(this.props.subjectsList)
        return (<div><CbList list={this.props.subjectsList}/></div>)
    }
}

function mapStateToProps(state){
    return {
        subjectsList: state.quiz.subjectsList
    }
}

export default connect(mapStateToProps, actions)(SubjectSelect);