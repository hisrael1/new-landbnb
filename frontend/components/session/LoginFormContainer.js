import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './LoginForm';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Login'    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
