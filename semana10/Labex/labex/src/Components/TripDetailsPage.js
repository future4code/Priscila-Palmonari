import React, { useEffect, useState } from "react"
import axios from "axios";
import { useProtectedPage } from "../Hooks/useProtectedPage";



function TripDetailsPage() {
  const [trip, setTrip] = useState({})
  useProtectedPage()

  useEffect(() =>{
    getTripDetail()
  },[])

  const getTripDetail = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trip/O3bYHWtAfwYC2GbXmlJ8",
    {
      headers:{
        auth: localStorage.getItem("token")
      }
    })
    .then((response) =>{
      setTrip(response.data.trip)
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div>
      <h1>TripDetailsPage</h1>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
    </div>
  );
}

export default TripDetailsPage