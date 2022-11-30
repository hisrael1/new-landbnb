import React from 'react';

class NewListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {host_id: props.user.id, title: "", description: "", address: "", city: "", state: "", zipcode: "", num_baths: "", num_beds: "", max_num_guests: "", price_per_night: "", photos: [], photoPreview: []}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const currentValue = e.target.value;
        const name = e.target.name;
        this.setState({[name]: currentValue});
    }

    handleSubmit(e) {
        e.preventDefault();

        var geocoder = new google.maps.Geocoder();
        var address = `${this.state.address} ${this.state.city} ${this.state.state}`

        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                const latitude = results[0].geometry.location.lat();
                const longitude = results[0].geometry.location.lng();
                formData.append('listing[lat]', latitude);
                formData.append('listing[lng]', longitude);
            } 
        })

                
        const formData = new FormData();
        formData.append('listing[title]', this.state.title);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[address]', this.state.address);
        formData.append('listing[host_id]', this.state.host_id);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[zipcode]', this.state.zipcode);
        formData.append('listing[max_num_guests]', this.state.max_num_guests);
        formData.append('listing[num_beds]', this.state.num_beds);
        formData.append('listing[num_baths]', this.state.num_baths);
        formData.append('listing[price_per_night]', this.state.price_per_night);
        

        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("listing[photos][]", this.state.photos[i]);
        }

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }
          
        delay(1000).then(() => 
            $.ajax({
                url: '/api/listings',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false    
            }).then(response => {this.props.history.push(`/listing/${response.id}`)})
        );
    }

    handleFile(e) {
        const photoPreview = this.state.photoPreview ? [...this.state.photoPreview] : [];
        Object.values(e.target.files).forEach(photo => photoPreview.push(URL.createObjectURL(photo)));
        if (this.state.photos.length < 5) {
            const photos = this.state.photos.concat(Object.values(e.target.files));
            this.setState({ photos: photos, photoPreview: photoPreview });
        }
    }
    
    render () {
        const preview = this.state ? this.state.photoPreview.map((preview,idx) => 
            <div key={idx}>
                <img src={preview} className="photo-upload-preview"/>
            </div>) : null

        return (
            <div className="new-listing-container">
                <form className="new-listing-form">
                    <div className="new-listing-add-listing"> Add Listing </div>
                    Title <input className='new-listing-input' onChange={this.handleChange} value={this.state.title} name="title"/>
                    <div className="new-listing-border" ></div>
                    Description <input className='new-listing-input' type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
                    <div className="new-listing-border"></div>
                    Address <input className='new-listing-input' onChange={this.handleChange} value={this.state.address} name="address"/>
                    <div className="new-listing-border"></div>
                    City <input className='new-listing-input' onChange={this.handleChange} value={this.state.city} name="city"/>
                    <div className="new-listing-border"></div>
                    State <input className='new-listing-input' onChange={this.handleChange} value={this.state.state} name="state"/>
                    <div className="new-listing-border"></div>
                    Zip Code <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.zipcode} name="zipcode"/>
                    <div className="new-listing-border"></div>
                    Number of Bathrooms <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.num_baths} name="num_baths"/>
                    <div className="new-listing-border"></div>
                    Number of Bedrooms <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.num_beds} name="num_beds"/>
                    <div className="new-listing-border"></div>
                    Max Guests <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.max_num_guests} name="max_num_guests"/>
                    <div className="new-listing-border"></div>
                    Price <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.price_per_night} name="price_per_night"/>
                    <div className="new-listing-border"></div>
                    Upload Photos (5) <input id="upload-listing-photos" type="file" multiple onChange={this.handleFile} name="photos"/>
                    <div className="new-listing-border"></div>

                    <div id="photo-upload-preview-container">
                        {this.state ? preview : null}
                    </div>
                    
                    <div className="new-listing-border"></div>
                    <input onClick={this.handleSubmit} className='new-listing-submit' type="submit"/>
                </form>
            </div>
        )
    }
}

export default NewListingForm;
