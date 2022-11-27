import React from 'react';

const Cities = () => {

    return (

        <div>
            <p id="inspiration">
                Inspiration for your next trip
            </p>

            <div id="white-space-below-inspiration"></div>


            <div id="city-container" className="cities">
                <div id='montauk' className="city">
                    <img src={window.montauk} id="montauk"/>
                    <p className="cty-text">Montauk</p>
                </div>
                <div id='lakegeorge' className="city">
                    <img src={window.lakegeorge} id="lakegeorge"/>
                    <p className="cty-text">Lake George</p>
                </div>
                <div id='newport' className="city">
                    <img src={window.newport} id="newport"/>
                    <p className="cty-text">Newport</p>
                </div>
                <div id='scranton' className="city">
                    <img src={window.scranton} id="scranton"/>
                    <p className="cty-text">
                        Scranton
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cities;
