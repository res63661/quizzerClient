import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions'

import { withRouter } from 'react-router'
class TakeTest extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount(){
        if(this.props.location.state.subjectsList){
            console.dir(this.props.location.state)
            console.dir('You selected: ' + this.props.location.state.subjectsList.map((s) => s.subject).join(', '))            
        }

        this.props.getQuestionsBySubjects(this.props.location.state.subjectsList.map(s=>s.subject));
    }

    render() {

        this.question = 'no q';
        this.answer = 'no answer'
        if (this.props.questionList && this.props.questionList.length > 0) {
            this.question = this.props.questionList[0].question;
            this.answer = this.props.questionList[1].answer;
        }


        return (
            <div>
                <div>
                    <div>
                        <input name="Q" value={this.question} />
                    </div>
                    <div>
                        <input name="A" value={this.answer} />
                    </div>
                </div>
                <div>
                    <div>
                        <button></button>
                        <span>Show Answer</span>
                    </div>
                    <div>
                        <button></button>
                        <span>Show next</span>
                    </div>
                    <div>
                        <button></button>
                        <span>Show Last</span>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionList: state.quiz.questionsList
    }
}

export default connect(mapStateToProps, actions)(withRouter(TakeTest));
