import { connect } from "react-redux";
import User from "./User";
import { getUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    userId: state.session.id,
    user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
