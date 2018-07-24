import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'


//Create controlled cpt
export default class CbItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isChecked : false
        }
    }

    onChangeInternal(){
        //Set state and then invoke parent handler.
        let current = this.state.isChecked;
        this.setState({...this.state, isChecked: !current});

        if(this.props.handleChecked){
            this.props.handleChecked(this.props.subjectId, !current);
        }

        
    }

    render() {

        return (
            <div>
                <div><input type='checkbox' defaultChecked={this.state.isChecked} onChange={()=>this.onChangeInternal()}/>
                </div>
                <div>
                    {this.props.content}
                    </div>
            </div>

        )

    }

}