import React from 'react';

class UserIdentity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photo: null}
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.button = React.createRef();
    }

    handleFile(e) {
        const photo = e.currentTarget.files[0];
        this.setState({photo: photo});
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append('id', this.props.user.id);
        formData.append('photo', this.state.photo);

        $.ajax({
            url: `/api/users/${this.props.user.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false    
        }).then(
            response => {alert("Upload Successful. Refresh page to view.")}
        )
    }

    render() {
        const { user } = this.props;
        if (user && !Object.keys(user).includes("photoUrl")) {
            user.photoUrl = window.blank_user_profile
        }

        if (!!this.state.photo) {
            this.button.current.click()
        }

        return (
            <div className="user-identity">
                {user ? <img src={user.photoUrl} id="blank_user_profile" /> : null}
                {user ? <p className="hello-user"> Hello, {user.first_name} {user.last_name} </p> : null}
    
            <div id="profile-photo-upload-container">
                <label id="profile-photo-upload" htmlFor="file-upload" className="custom-file-upload">
                    Add Profile Photo
                </label>
                <input id="file-upload" type="file" onChange={this.handleFile} hidden/>
                <button onClick={this.handleSubmit} ref={this.button} hidden> yeet </button>
            </div>

                <div>
                    <img src={window.shield_checkmark} className="shield-checkmark" />
                    <p className="user-verified"> Identity Verified </p>
                </div>
            
                <div className="user-identity-border"></div>
            
                <div>
                    <p className="user-confirmed"> User confirmed </p> 
                    <p className="checkmark">&#10004; Identity</p>
                    <p className="checkmark">&#10004; Email Address</p>
                </div>
            </div>
        )
    }
}

export default UserIdentity;    



