import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
//import './AnimalDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        title: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        OwnerManager.delete(this.props.ownerId)
            .then(() => this.props.history.push("/owner"))
    }
    componentDidMount() {
        console.log("OwnerDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        OwnerManager.get(this.props.ownerId)
            .then((owner) => {
                this.setState({
                    name: owner.name,
                    title: owner.title,
                    loadingStatus: false
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/* <picture>
                        <img src={require('')} alt="" />
                    </picture> */}
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>title: {this.state.owner}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Let Go</button>
                </div>
            </div>
        );
    }
}

export default OwnerDetail;
