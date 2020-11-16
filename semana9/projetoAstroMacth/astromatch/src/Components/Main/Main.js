import styled from "styled-components"
import react from "react"
import AppBar from "../AppBar/AppBar"
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage"
import MatchListPage from "../MatchListPage/MatchListPage"

const MainContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width:400px;
height: 600px;
margin: 30px;
display: flex;
flex-direction: column;
`


function Main() {
  return (
    <MainContainer>
      <AppBar/>
      <ChooseProfilePage/>
      {/* <MatchListPage/> */}
    </MainContainer>


  );
}

export default Main