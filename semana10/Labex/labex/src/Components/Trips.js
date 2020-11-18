import styled from "styled-components"
import React from "react"
import { useHistory } from "react-router-dom";



function Trips() {
    const history = useHistory()

    const goToLoginPage = () =>{
        history.push("/login")
    }

    const goToFormSubscription = () =>{
      history.push("/formSubscription")
    }


  return (
    <div>
      <button onClick={goToLoginPage}>Login Administrador</button>
      <h1>Trips</h1>
      <p>Viagens</p>
      <button onClick={goToFormSubscription}>Inscrer-se para a viagem</button>
      
    </div>
  );
}

export default Trips 