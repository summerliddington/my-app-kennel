import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Kennel.css'
import './animals/Animal.css'

class Kennel extends Component {
  //Kennel extends to Component is part of React stating that take this data and add more to it from the component
    state = {
      user: false
    }

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    setUser = (authObj) => {
      /*
        For now, just store the email and password that
        the customer enters into local storage.
      */
    localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }
    clearUser = () => {
      localStorage.clear()

      this.setState({
          user: this.isAuthenticated()
      });

  }
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated()
      })
    }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} />
      </>
    )
  }
}

export default Kennel
