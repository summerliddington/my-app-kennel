import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeesManager"
import "./EmployeeForm.css"
import AnimalManager from "../../modules/AnimalManager";

class EmployeeEditForm extends Component {
    //set initial state
    state = {
        employeeName: "",
        title: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true});
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            title: this.state.title
        };
        EmployeeManager.update(editedEmployee)
        .then(() => this.props.history.push("/Employees"))
    }
    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                title: employee.title,
                loadingStatus: false,
            });
        });
    }
    render() {
        return (
            <>
            <form>
            <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeelName">Employee Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="occupation"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm