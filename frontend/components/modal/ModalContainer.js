import { closeModal } from "../../actions/modal_actions";
import Modal from "./Modal";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;
