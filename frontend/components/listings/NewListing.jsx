import React from 'react';
import Header from "../splash/Header";
import UserIdentity from '../user/UserIdentity';
import NewListingForm from './NewListingForm';
import ModalContainer from '../modal/ModalContainer';


const NewListing = (props) => {
    const {user, createNewListing, history} = props;
    return (
        <div>
            <Header className="user-header"/>
            <ModalContainer />

            <div className="identity-and-new-form-container">
                <UserIdentity user={user} />

                <NewListingForm user={user} createNewListing={createNewListing} history={history}/>
            </div>
        </div>
    )
}

export default NewListing;
