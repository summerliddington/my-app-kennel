import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeesManager'
import AnimalCard from '../animals/AnimalCard'


class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: []
    }
   getData = () => {
     EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
      .then((APIResult) => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals
        })
      })
   }
    componentDidMount(){
        //got here now make call to get employee with animal
      this.getData()
    }

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                {...this.props}
                getData={this.getData}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;