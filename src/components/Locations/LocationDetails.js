import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
//import './AnimalDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        place: "",
        loadingStatus: true,
    }

    handleDelete = () => {
      //invoke the delete function in AnimalManger and re-direct to the animal list.
      this.setState({loadingStatus: true})
      LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/location"))
  }
    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                place: location.breed,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            {/* <picture>
              <img src={require('')} alt= />
            </picture> */}
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Place: {this.state.place}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;