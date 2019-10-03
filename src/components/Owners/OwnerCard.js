import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Owner.css'

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <Link to={`/owner/${this.props.owner.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;