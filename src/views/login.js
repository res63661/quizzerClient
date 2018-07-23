import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loggedIn:false}
    }

    render() {

        let content = !this.state.loggedIn ?
            (<button onClick={() => this.setState({loggedIn:true})}>Log in</button>)
            :
            (<div>
                <Link to="/selectSubjects">Select your subjects</Link>
            </div>
            )
        return (<div>
            Login
            {content}


        </div>)
    }
}

export default Login;