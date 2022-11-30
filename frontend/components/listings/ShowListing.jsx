import React from 'react';
import Header from '../splash/Header';
import Footer from '../splash/Footer'
// import Booking from '../booking/Booking.jsx';
// import ListingsMap from './ListingsMap';
// import ReviewsIndex from '../reviews/ReviewsIndex';
import ModalContainer from '../modal/ModalContainer';

class ShowListing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const listingId = parseInt(this.props.match.params.id);
        this.props.getListing(listingId);
        // this.props.getBookings();
        // window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        if (this.props.listing && !this.props.users[this.props.listing.host_id]) {
            this.props.getUser(this.props.listing.host_id);
        }
    }

    render() {
        const listing = this.props.listing ? this.props.listing: null;

        let user;
        if (listing && this.props.users[listing.host_id]) {
            user = this.props.users[listing.host_id];
        }

        let photos = [];
        if (this.props.listing) {
            for (let i = 0; i < 5; i++) {
                photos[i] = window.listing_pic01;
                // if (this.props.listing.photoUrls[i]) {
                //     photos[i] = this.props.listing.photoUrls[i];
                // } else {
                //     photos[i] = window.listing_pic01;
                // }
            }
        }
        
        const bookings = [];
        // if (this.props.bookings && this.props.listing) {
        //     this.props.bookings.forEach(
        //         booking => {
        //             if (booking.listing_id == this.props.listing.id) {
        //                 bookings.push(booking)
        //             }
        //         }
        //     )
        // }
        

        return (
            <div>
                <Header />
                <ModalContainer />
                <div className="show-listing-title-info-container">
                    <p className="show-listing-title">
                        {listing ? listing.title : null}
                    </p>
                    <div className='show-listing-reviews-location-container'>
                        <p className='show-listing-reviews-container'> 
                            <span>&#9733; 5.0 </span>
                            <span>&#183;</span>
                            <span className='show-listing-reviews'>4 reviews</span>
                            <span>&#183;</span>
                            <span className='show-listing-reviews'>{listing ? listing.city : null}, {listing ? listing.state : null}, United States</span>
                        </p>
                    </div>

                    <div className='show-listing-photos-container'>
                        {this.props.listing ? <img src={photos[0]} className='show-listing-photo-1'/> : null }
                        <div className="show-listing-right-photos-container">
                            <div className="show-listing-right-photos-1">
                                {this.props.listing ? <img src={photos[1]} className='show-listing-photo-2'/> : null }

                                {this.props.listing ? <img src={photos[2]} className='show-listing-photo-3'/> : null }
                            </div>
                            <div className="show-listing-right-photos-2">
                                {this.props.listing ? <img src={photos[3]} className='show-listing-photo-4'/> : null }
                                {this.props.listing ? <img src={photos[4]} className='show-listing-photo-5'/> : null }
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='show-listing-hosted-by'>
                            Hosted By {user ? user.first_name : null } {user ? user.last_name : null }
                        </div>
                        <div className="show-listing-capacity-info">
                            <span>{listing ? listing.max_num_guests : null} guests</span>
                            <span>&#183; {listing ? listing.num_beds : null} beds</span>
                            <span>&#183; {listing ? listing.num_baths : null} baths</span>                            
                        </div>
                    </div>

                    <div className='show-listing-description-and-booking-container'>
                        <div>
                            <div className='show-listing-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Aenean euismod 
                                elementum nisi quis eleifend. Justo laoreet sit amet cursus sit amet. Amet est placerat in
                                egestas erat imperdiet sed. Feugiat in ante metus dictum. Urna et pharetra pharetra massa massa
                                ultricies mi quis hendrerit. Morbi quis commodo odio aenean sed adipiscing.
                            </div>

                            <div id="aircover-container">
                                <div id="aircover-container-underline"></div>                            
                                <img id="aircover" src={window.aircover} />
                                Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.    
                                <div id="aircover-container-underline"></div>
                            </div>

                            <div id="amenities-header">What this place offers</div>
                            <div id="amenities-container">    
                                <div>
                                    <div className="amenity-item-container">
                                        <img src={window.tv} className="amenity-item"/>
                                        <p>Tv</p>
                                    </div>
                                    <div className="amenity-item-container">
                                        <img src={window.kitchen} className="amenity-item"/>
                                        <p>Kitchen</p>
                                    </div>
                                    <div className="amenity-item-container">
                                        <img src={window.wifi} className="amenity-item"/>
                                        <p>Fast wifi – 300 Mbps</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="amenity-item-container">
                                        <img src={window.smokealarm} className="amenity-item"/>
                                        <p>Smoke Alarm</p>
                                    </div>
                                    
                                    <div className="amenity-item-container">
                                        <img src={window.dishwasher} className="amenity-item"/>
                                        Dishwasher
                                    </div>
                                    <div className="amenity-item-container">
                                        <img src={window.bathtubshower} className="amenity-item"/>
                                        Bathtub Shower
                                    </div>
                                    
                                    
                                </div>                    
                            </div>

                        </div>
                        

                        <div className='show-listing-booking-container'>
                            Booking Container
                            {/* <Booking history={history} listing={listing} bookings={bookings} newBooking={this.props.newBooking} user_id={this.props.user_id}/> */}
                        </div>
                        
                    </div>
                </div>

                <div className="reviews-underline"></div>

                

                {/* <ReviewsIndex listing={listing} history={this.props.history}/> */}
                Review Index
                
                <div id="show-listing-map">
                    <div id="show-listing-map-text">Where You'll Be</div>
                    {/* <ListingsMap listing={listing} showMap={true}/> */}
                </div>
                <Footer />
            </div>
        )
    } 

}

export default ShowListing;
