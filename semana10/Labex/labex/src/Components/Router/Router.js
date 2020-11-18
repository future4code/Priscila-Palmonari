import styled from "styled-components"
import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import LoginPage from "../LoginPage"
import Trips from "../Trips";
import FormSubscription from "../FormSubscripton";
import CreateTrips from "../CreateTrips";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";



function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ="/">
        <Trips/>
      </Route>

      <Route exact path ="/formSubscription">
        <FormSubscription/> 
      </Route>

      <Route exact path = "/login">
        <LoginPage/>
      </Route>

      <Route exact path = "/createTrips">
        <CreateTrips/>
      </Route>

      <Route exact path = "/listTrips">
        <ListTripsPage/>
      </Route>

      <Route exact path = "/tripDetailsPage">
        <TripDetailsPage/>
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default Router