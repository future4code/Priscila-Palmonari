import styled from "styled-components";
import react from "react";


const AppBarContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid lightgray;
align-items: center;
padding: 0 8px;
`


function AppBar() {
  return (
    <AppBarContainer>
      <button>Escolher</button>
      <p>astromatch</p>
      <button>Lista</button>
    </AppBarContainer>
  );
}

export default AppBar