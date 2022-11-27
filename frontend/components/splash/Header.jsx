import React from 'react';
import Menu from './Menu';
import Search from './Search';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {color: "black"}

        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    listenScrollEvent(e) {
        if (window.scrollY > 10) {
            this.setState({color: 'white'});
        } else {
            this.setState({color: 'black'});
        }
    }

    render() {

        let headerType = "header";
        let iconType = "airbnb-icon";
        if (this.state.color == "white") {
            headerType = "header-white";
            iconType = "airbnb-icon-white";
        }

        return (
            <div id={headerType}>
                <div id='app-name-header' onClick={() => this.props.history.push("/")}>
                    <img className={iconType} src={window.airbnb_icon}/>
                    Landbnb
                </div>

                <Search history={history}/>
                <Menu history={history}/>
            </div>
        )
    }
}

export default withRouter(Header);
