import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Employee.css'


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Our Pet Lovin' Employees!</h2>
          <h3>Employee: : <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>title: {this.props.employee.title}</p>
          <Link to={`/employees/${this.props.employee.id}/details`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;