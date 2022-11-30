// import { connect } from "react-redux";
// import ShowListing from "./ShowListing";
// import { receiveListing } from "../../actions/listing_actions";
// import { getUser } from "../../actions/user_actions";
// import { indexBookings } from "../../actions/booking_actions";
// import { newBooking } from "../../actions/booking_actions";

// const mapStateToProps = (state, ownProps) => ({
//     listing: state.entities.listings[ownProps.match.params.id],
//     users: state.entities.users,
//     bookings: Object.values(state.entities.bookings),
//     user_id: state.session.id
// })

// const mapDispatchToProps = dispatch => ({
//     getListing: (listingId) => dispatch(receiveListing(listingId)),
//     getUser: (userId) => dispatch(getUser(userId)),
//     getBookings: () => dispatch(indexBookings()),
//     newBooking: (booking) => dispatch(newBooking(booking))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ShowListing);
