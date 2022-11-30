import React from 'react';

const UserInfo = (props) => {
    const {user, history} = props;

    return (
        <div className="user-info-container">
            {user ? <p id="user-info-hi"> Hi, I'm {user.first_name} {user.last_name} </p> : null}
            <p id="user-info-about"> About </p>
            <div className="user-info-border"></div>
            <p id="user-listings-header">&#9830; 2 Listings</p>
            <button id="user-add-listing" onClick={() => history.push('/listing/new')}> Add Listing </button>
            {/* Clicking this should render all the users listings */}
            <div className="user-info-border"></div>
            <p id="user-listings-header">&#9733; 3 Reviews </p>
            {/* Clicking this should render all the users reviews */}
        </div>
    )
}

export default UserInfo;
