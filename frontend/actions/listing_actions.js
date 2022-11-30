import { fetchListings } from "../util/listing_api_util";
import { createListing } from "../util/listing_api_util";
import { fetchListing } from "../util/listing_api_util";

export const receiveListings = (listings) => ({
    type: "RECEIVE_LISTINGS",
    listings
})

export const indexListings = () => dispatch => (
    fetchListings().then(
        listings => (dispatch(receiveListings(listings)))
    )
)

export const createNewListing = (listing) => ({
    type: "RECEIVE_LISTING",
    listing
})

export const newListing = (listing) => dispatch => (
    createListing(listing).then(
        listing => (dispatch(createNewListing(listing)))
    )
)

export const showListing = (listing) => ({
    type: "RECEIVE_LISTING",
    listing
})

export const receiveListing = (listingId) => dispatch => (
    fetchListing(listingId).then(
        listing => (dispatch(showListing(listing)))
    )
)
