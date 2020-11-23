import React from "react"
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { Button, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core'
import { useTripsList } from '../Hooks/useTripsList'
import { useHistory, Link } from 'react-router-dom'
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const TripsListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  a{
    text-decoration: none;
    color: black;

  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
  },
}));



function TripDetailsPage() {
  const trips = useTripsList()
  const history = useHistory()
  const classes = useStyles();
  useProtectedPage()

  
  const goToCreateTrip = () => {
    history.push("/createTrips")
  }

  return <TripsListPageContainer>
  <h1>Lista de Viagens</h1>
  
    <Link to={'/createTrips'}>
    <Button variant={'contained'} color={'primary'}>Criar viagem</Button>
     </Link><br/><br/>
  

  <List component="nav">
    {trips.map((trip) => {
      return <Link to={`/ADMTripsDetails/${trip.id}`}>
        <ListItem button>
          <ListItemText primary={trip.name} />
        </ListItem>
        <Divider/>
      </Link>
      
    })}
  </List>
</TripsListPageContainer>
}


export default TripDetailsPage