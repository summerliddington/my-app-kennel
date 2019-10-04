import { Route , Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LocationDetail from './Locations/LocationDetails'
import Home from './home/home'
import AnimalList from './animals/AnimalList'
import AnimalDetail from './animals/AnimalDetail'
import AnimalEditForm from './animals/AnimalEditForm'
import LocationList from './Locations/LocationList'
import EmployeeList from './Employees/EmployeeList'
import EmployeeDetail from './Employees/EmployeeDetail'
import EmployeeWithAnimals from './Employees/EmployeeWithAnimals'
import EmployeeEditForm from './Employees/EmployeeEditForm'
import OwnerList from './Owners/OwnerList'
import OwnerDetail from './Owners/OwnerDetails'
import AnimalForm from './animals/AnimalForm'
import Login from './Auth/Login'
//only include these once they are built - previous practice exercise


class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment> {/* React Fragment allows you to pull in part of a componeenent without writing all the syntax /html */}
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          <Route exact path="/animals" render={props => {
              if (this.props.user) {
                  return <AnimalList {...props} />
              } else {
                  return <Redirect to="/login" />
              }
          }} />
          {/*pass the `setUser` function to Login component.*/}
          <Route path="/login" render={props => {
            return <Login setUser={this.props.setUser} {...props} />
          }} />
          <Route exact path="/animals/:animalId(\d+)" render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
          }} />
          <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} />
          }} />
          <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
          }}/>

          <Route exact path="/locations" render={props => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
        }} />
        <Route exact path="/owners" render={props => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owner/:ownerId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}{...props} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.ownerId)}{...props} />
        }} /> */}
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        return <EmployeeEditForm {...props} />
        }}
        />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
        }} />
      </React.Fragment>
    )
  }
}

  export default ApplicationViews