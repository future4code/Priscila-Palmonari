import styled from "styled-components"
import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import LoginPage from "../LoginPage"
import Trips from "../Trips";
import FormSubscription from "../FormSubscripton";
import CreateTrips from "../CreateTrips";

import ADMTripList from "../ADMTripList";
import ADMTripsDetails from "../ADMTripDetails/ADMTripsDetails"



function Router() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path ="/">
        <Trips/>
      </Route>

      <Route exact path ="/formSubscription/:id">
        <FormSubscription/> 
      </Route>

      <Route exact path = "/login">
        <LoginPage/>
      </Route>

      <Route exact path = "/createTrips">
        <CreateTrips/>
      </Route>

      <Route exact path = "/ADMTripList/">
        <ADMTripList/>
      </Route>

      <Route exact path= "/ADMTripsDetails/:tripId">
        <ADMTripsDetails/>
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default Router