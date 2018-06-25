import React, { Component } from 'react'

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUserName: '',
            currentUserEmail: ''
         }
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName: idToken.idToken.claims.name,
            currentUserEmail: idToken.idToken.claims.email
        })
    }

    render() { 
        return ( 
            <div>
                <p>Hello {this.state.currentUserName}</p>
                <p>User email: {this.state.currentUserEmail}</p>
            </div>
         )
    }
}
 
export default Staff;