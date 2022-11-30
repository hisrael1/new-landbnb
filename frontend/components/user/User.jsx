import React from "react";
import Header from "../splash/Header";
import Footer from "../splash/Footer";
import UserIdentity from "./UserIdentity";
import UserInfo from './UserInfo';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {user: null, history: null}
    }

    componentDidMount() {
        this.props.getUser(this.props.userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({user: this.props.user, history: this.props.history})
        }
    }

    render() {
        return (
            <div>
                <div className="user-header"> <Header /> </div>
                <div className="user-show-container">
                    {this.state.user ? <UserIdentity user={this.state.user}/> : null}
                    {this.state.user ? <UserInfo user={this.state.user} history={this.state.history}/> : null}
                </div>
                <Footer />
            </div>
        )
    }
}

export default User;
