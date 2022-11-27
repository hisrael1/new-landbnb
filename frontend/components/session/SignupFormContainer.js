import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './SignupForm';
import { closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign Up'    
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: (user) => dispatch(login(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
