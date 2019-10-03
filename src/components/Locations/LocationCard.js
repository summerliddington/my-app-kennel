import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Location.css'

class LocationCard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
                    <p>Address: {this.props.location.address}</p>
                    <p>Phone: {this.props.location.phone}</p>
                    <Link to={`/location/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;