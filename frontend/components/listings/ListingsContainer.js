import { connect } from "react-redux";
import { indexListings } from "../../actions/listing_actions";
import ListingsIndex from "./ListingsIndex";
// import { indexBookings } from "../../actions/booking_actions";

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
    // bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = dispatch => ({
    indexListings: () => dispatch(indexListings())
    // getBookings: () => dispatch(indexBookings()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingsIndex);
