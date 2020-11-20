import styled from "styled-components"
import React from "react"
import { useHistory } from "react-router-dom"



function ListTripsPage() {

  const history = useHistory()
  
  const goToListTrips = () => {
    history.push("listTrips")
  }

  const goToDetailsTrip = () => {
    history.push("/tripDetailsPage")
  }
  return (
    <div>
      <button onClick={goToListTrips}>Lista de Viagens</button>
      <button onClick={goToDetailsTrip}>Detalhe da Viagem</button>
    </div>
  );
}

export default ListTripsPage