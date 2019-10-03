import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeesManager from '../../modules/EmployeesManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
        deleteEmployee = id => {
            EmployeesManager.delete(id)
            .then(() => {
              EmployeesManager.getAll()
              .then((newEmployee) => {
                this.setState({
                    employees: newEmployee
                })
              })
            })
          }
    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeesManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }

    render(){
        console.log("EMPLOYEE LIST: Render");

        return(
            <div className="container-cards">
                {this.state.employees.map(employee =>
                    <EmployeeCard key={employee.id}
                        employee={employee}
                        deleteEmployee={this.deleteEmployee}/>)}
            </div>
        )
    }
}

export default EmployeeList
