import React from 'react';
import { withRouter } from 'react-router-dom';

const Dropdown = ({session, openModal, logout, history}) => {

    if (!session.id) {
        return (
            <div className="menu-dropdown"> 
                <p className="session-dropdown-option" onClick={() => openModal("login")}>Login</p>
                <p className="session-dropdown-option" onClick={() => openModal("signup")}>Sign Up</p>
            </div>    
        )
    } else {
        return (
            <div className="menu-dropdown"> 
                <p className="session-dropdown-option" onClick={() => {logout(); history.push('/')}}>Logout</p>
                <p className="session-dropdown-option" onClick={() => history.push('/users/show')}>Profile</p>
                <p className="session-dropdown-option" onClick={() => {history.push('/user/:id/bookings')}}>Trips</p>
            </div>    
        )
    }
}

export default withRouter(Dropdown);
