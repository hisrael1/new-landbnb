import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {city: "", max_num_guests: "0", check_in_date: "", check_out_date: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const currentValue = e.target.value;
        const name = e.target.name
        this.setState({[name]: currentValue});
    }

    handleSubmit(e) {
        e.preventDefault();
        const searchUrl = new URLSearchParams(this.state).toString();
        this.props.history.push({
            pathname: `/listings/${searchUrl}`,
        })
    }

    render() {

        let bookingValid = true;
        if (this.state.check_in_date && this.state.check_out_date) {
            if (this.state.check_out_date <= this.state.check_in_date) {
                bookingValid = false;
            }
        }

        

        return (
            <form id="search" className="search" onSubmit={this.handleSubmit}>
                <input type="text" className="left-edge-search" placeholder="City" name="city" onChange={this.handleChange}/>
                <input type="date" className="mid-search" name="check_in_date" value={this.state.check_in_date} onChange={this.handleChange}/>
                <input type="date" className="mid-search" name="check_out_date" value={this.state.check_out_date} onChange={this.handleChange}/>
                <input type="int" className="right-edge-search" placeholder="Number of Guests" name="max_num_guests" onChange={this.handleChange}/>
                <div id="search-icon-outer-container"> 
                    <input type="submit" id="search-submit"/>
                    {bookingValid ? 
                        <svg onClick={this.handleSubmit} type="submit" id="search-icon-container" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                            <path id="search-icon" d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
                        </svg>
                    :
                        <svg type="button" id="false-search-icon-container" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                            <path id="search-icon" d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
                        </svg>
                    }
                </div>
            </form>
        )
    }
}

export default withRouter(Search);
