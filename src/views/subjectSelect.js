import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import CbList from '../containers/cbList'
import { withRouter } from 'react-router'

const LinkButton = (props) => {
    return (
        <a onClick={(e) => props.handleLinkClick(e)} href=''>{props.content}</a>
    )
}

class SubjectSelect extends React.Component {

    handleLinkClick(event) {
        try {
            this.props.history.push('/takeTest', { subjectsList: this.props.subjectsList.filter((f) => f.isChecked === true) })
        } catch (err) {
            alert(err);
        }
    }

    handleChecked(hit){
        //Update state via redux action.
        
    }

    render() {
        console.log(this.props.subjectsList)
        return (
        <div>
            <CbList list={this.props.subjectsList} handleChecked={this.handleChecked.bind(this)}/>
            <LinkButton content='Take the test!' handleLinkClick={(e) => this.handleLinkClick(e)} />
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        subjectsList: state.quiz.subjectsList
    }
}

export default connect(mapStateToProps, actions)(withRouter(SubjectSelect));