import styled from "styled-components"
import react from "react"

const ButtonsContainer = styled.button`
display: flex;
justify-content: space-around;
`

function ChooseButtons() {
  return (
    <div>
      <button>Não</button>
      <button>Sim</button>
    </div>
  );
}

export default ChooseButtons