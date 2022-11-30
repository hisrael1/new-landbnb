export const fetchListings = () => (
    $.ajax({
        method: "GET",
        url: '/api/listings/',
    })
)

export const createListing = (listing) => (
    $.ajax({
        method: "POST",
        url: `/api/listings/`,
        data: { listing }
    })
)

export const fetchListing = (listingId) => (
    $.ajax({
        method: "GET",
        url: `/api/listings/${listingId}`
    })
)


