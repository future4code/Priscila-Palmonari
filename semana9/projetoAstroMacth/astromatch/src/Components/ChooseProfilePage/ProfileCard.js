import styled from "styled-components"
import react from "react"

const ProfileCardContainer = styled.div`
margin: 16px;
border: 1px solid black;


`
const ProfileImg = styled.img`
width:100%;
display: block;
max-height: 350px;`

const ProfileInfo = styled.div`
padding: 0 16px;
`

function ProfileCard(props) {
    const profile = props.profile
    return (
        <ProfileCardContainer>
            <ProfileImg src={profile.photo} />
            <ProfileInfo>
                <p>{profile.name},{profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileInfo>
        </ProfileCardContainer>
    );
}

export default ProfileCard