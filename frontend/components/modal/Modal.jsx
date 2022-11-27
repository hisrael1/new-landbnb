import React from 'react';
import SignupFormContainer from '../session/SignupFormContainer';
import LoginFormContainer from '../session/LoginFormContainer';

const Modal = ({modal, closeModal}) => {

    if (!modal) {
        return null
    }
    else {
        let component;
        switch(modal) {
            case "login":
                component = <LoginFormContainer closeModal={closeModal}/>;
                break;
            case "signup":
                component = <SignupFormContainer closeModal={closeModal}/>;
                break;
        }
        return (
            <div className='modal-background' onClick={() => closeModal()}>
                <div className='modal' onClick={(e) => e.stopPropagation()}> {component} </div>
            </div>
        )
    }
}

export default Modal;
