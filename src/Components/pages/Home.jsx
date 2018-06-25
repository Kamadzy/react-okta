import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
    }

    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () => {
        this.props.auth.login('/');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ? (
            <div>
                <p className="lead">You have entered, <Link to="/staff"> click here </Link> </p>
                <button className="btn btn-primary btn-lg" onClick={this.logout}>Logout</button>
            </div>
        ) : (
                <div>
                    <p className="lead">If you are a staff bla-bla <Link to="/staff"> click here </Link> </p>
                    <button className="btn btn-dark btn-lg" onClick={this.login}>Login</button>
                </div>
            );

        return (
            <div className="jumbotron">
                <div className="display-4">Well hello there 128975oktA</div>
                {mainContent}
            </div>
        );
    }
});