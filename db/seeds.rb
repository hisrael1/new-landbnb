# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(first_name: "Demo", last_name: "User", email: "user@demo.com", password: "password")

Listing.destroy_all
Listing.create({
        title: "Gorgeous Penthouse in Miami",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        host_id: 1,
        address: "12000 Biscayne Blvd",
        city: "Miami",
        state: "Florida",
        zipcode: 33132,
        num_beds: 4,
        num_baths: 4,
        max_num_guests: 8,
        price_per_night: 1340,
        lat: 12.32,
        lng: 132.74
    })

    Listing.create({
        title: "Secluded Cabin in Idaho",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        host_id: 1,
        address: "12000 Idaho Blvd",
        city: "Idaho City",
        state: "Idaho",
        zipcode: 33132,
        num_beds: 4,
        num_baths: 4,
        max_num_guests: 8,
        price_per_night: 1340,
        lat: 12.32,
        lng: 132.74
    })
