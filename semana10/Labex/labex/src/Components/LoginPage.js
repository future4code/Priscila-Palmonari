import styled from "styled-components"
import React from "react"
import { useHistory } from "react-router-dom"



function LoginPage() {
  const history = useHistory()

    const goToBuyTripPage = () =>{
        history.push("/")
    }

    const goToListTrips = () =>{
      history.push("listTrips")
    }

    const goToDetailsTrip = () =>{
      history.push("/tripDetailsPage")
    }


  return (
    <div>
      <button onClick={goToBuyTripPage}>Comprar Viagens</button>
      <h1>Pagina do administrador</h1>
      
      
      <button onClick={goToListTrips}>Lista de Viagens</button>
      <button onClick={goToDetailsTrip}>Detalhe da Viagem</button>
    </div>
  );
}

export default LoginPage