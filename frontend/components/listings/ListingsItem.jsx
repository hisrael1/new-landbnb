import React from 'react';
import { withRouter } from 'react-router-dom';

const ListingsItem = (props) => {
    const history = props.history;
    const { title, city, num_baths, num_beds, max_num_guests, price_per_night, id} = props.listing;
    // const { title, city, num_baths, num_beds, max_num_guests, price_per_night, id, photoUrls } = props.listing;
    // if (!photoUrls[0]) {
    //     photoUrls[0] = window.listing_pic01;
    // }

    return (
        <div>
            <div className="listing-item-container" onClick={(e) => history.push(`/listing/${id}`)}>
                {/* <img src={photoUrls[0]} className="listing-thumbnail"/> */}
                <img src={window.listing_pic01} className="listing-thumbnail"/>
                <div className="listing-item-info">
                    <p className="listing-description"> Apartment in {city} </p>
                    <p className="listing-title"> {title} </p>
                    <div className="listing-capacities">
                        {num_beds} Beds <span className="bullet-symbol">&#183; </span> {max_num_guests} Guests <span className="bullet-symbol">&#183; </span> {num_baths} Baths
                    </div>
                    
                    <div className="ratings-and-price-container">
                        <p className="listing-rating-and-reviews"> <span className="bold">&#9733; 5.0 </span> (4 reviews) </p>
                        <p className="listing-price"> <span className="bold"> ${price_per_night} </span> / per night </p> 
                    </div>
                </div>
            </div>
            <div id="listing-item-underline"></div>            
        </div>
    )
}

export default withRouter(ListingsItem);
