import { connect } from "react-redux";
import NewListing from "./NewListing";
import { newListing } from "../../actions/listing_actions";

const mapStateToProps = state => ({
    user: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createNewListing: (listing) => dispatch(newListing(listing))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListing);
