import React from "react";
import Header from "../splash/Header";
import ListingsItem from "./ListingsItem";
import ModalContainer from "../modal/ModalContainer";
import Footer from "../splash/Footer";
// import ListingsMap from "./ListingsMap";


class ListingsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listings: []};
        this.findAvailableListings = this.findAvailableListings.bind(this);
    }

    componentDidMount() {
        this.props.indexListings();
        // this.props.getBookings();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            if (this.props.match.params.query) {
                const queryString = require('query-string');
                const parsed = queryString.parse(this.props.match.params.query);
                
                // filter by city and num_guests
                let listings = [...this.props.listings];
                listings = listings.filter(
                    listing => listing.city.includes(parsed.city)).filter(
                        listing => listing.max_num_guests >= parsed.max_num_guests
                    );

                // filter by booking dates
                let availableListings = [];
                if (listings.length > 0 && parsed.check_in_date && parsed.check_out_date) {
                    availableListings = this.findAvailableListings(listings, this.props.bookings, parsed.check_in_date, parsed.check_out_date)
                    
                    listings = listings.filter(
                        listing => availableListings.includes(listing))
                }

                this.setState({listings: listings});
            } else {
                const listings = [...this.props.listings];
                this.setState({listings: listings});
            }
        }
    }

    findAvailableListings(listings, bookings, check_in_date, check_out_date) {
        let availableListings = [];
        listings.forEach(listing => {
            let isAvailable = true;
            const listingBookings = bookings.filter(booking => booking.listing_id == listing.id);
            listingBookings.forEach(booking => {
                if (check_in_date >= booking.check_in_date && check_in_date < booking.check_out_date) {
                    isAvailable = false;
                } else if (check_out_date > booking.check_in_date && check_out_date <= booking.check_out_date) {
                    isAvailable = false;
                } else if (check_in_date <= booking.check_in_date && check_out_date >= booking.check_out_date) {
                    isAvailable = false;
                } 
            })
            if (!!isAvailable) {
                availableListings.push(listing);
            }
        })
        return availableListings
    }

    render() {
    
        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="listings-and-map-container">
                    <div className="listings-index-container">
                        {this.state.listings ? this.state.listings.map((
                            listing => <ListingsItem key={listing.id} listing={listing} history={this.props.history}/>
                        )) : null}
                    </div>

                    <div id="sticky-map">
                        MAP
                        {/* <ListingsMap listings={Object.values(this.state.listings)} history={this.props.history} /> */}
                    </div>           
        
                </div>

                <Footer />

            </div>
        )
    }
};

export default ListingsIndex;
