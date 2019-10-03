import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeesManager';
import './Employee.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        title: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            {/* <picture>
              <img src={require('./guy.png')} alt="Man" />
            </picture> */}
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Title: {this.state.employee}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire</button>
          </div>
        </div>
      );
    }
}

export default EmployeeDetail;