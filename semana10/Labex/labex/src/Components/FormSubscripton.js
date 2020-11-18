import styled from "styled-components"
import React from "react"
import { useHistory } from "react-router-dom";



function FormSubscription() {
  const history = useHistory()

  const goBackToSubscription = () =>{
    history.goBack()
  }

  const goToLoginADM = () =>{
    history.push("/login")
  }
  return (
    <div>
      <h1>FormSubscription</h1>
      <button onClick={goToLoginADM}>Login Administrador</button>
      <button onClick={goBackToSubscription}>Voltar para as viagens</button>
    </div>
  );
}

export default FormSubscription 