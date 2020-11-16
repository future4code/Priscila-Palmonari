import styled from "styled-components"
import react from "react"



const ListItemContainer = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid gray;

:hover{
 background-color: rgba(0,0,0,0.3)
}
`

const ImgAvatar = styled.img`
border-radius: 50%;
margin-right: 8px;
width: 30px;
height: 30px;
`

function MatchListItem(props) {
    const profile = props.profile
  return (
    <ListItemContainer>
      <ImgAvatar src={profile.photo}/>
      <p>{profile.name}</p>
    </ListItemContainer>
  );
}

export default MatchListItem