import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import CbItem from '../components/cbItem'



class CbList extends React.Component {

    onChecked(subjectId, isChecked) {
        //Set the id checked.
        //Update the given value.
        let hit = this.props.list.find((f)=>f.subjectId === subjectId);
        if(hit){
            hit.isChecked = isChecked;
        }
        console.log(this.props.list.map((v) => v.isChecked).join(', '))
    }

    render() {
        let renderItems = this.props.list.map((v) => {
            return <li key={v.subjectId}><CbItem content={v.subject} isChecked={v.isChecked} handleChecked={this.onChecked.bind(this)} subjectId={v.subjectId} /></li>
        })

        return (
            <div>
                <ul>
                    {renderItems}
                </ul>
            </div>
        )
    }
}

export default CbList;