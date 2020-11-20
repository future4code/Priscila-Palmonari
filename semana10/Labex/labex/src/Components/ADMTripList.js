import React from "react"
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { Button, List, ListItem, ListItemText,} from '@material-ui/core'
import { useTripsList } from '../Hooks/useTripsList'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';


export const TripsListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  const goToDetailsTrips = (id) => {
    history.push(`/ADMTripsDetails/${id}`)
  }

  

  return <TripsListPageContainer>
    <h1>Lista de Viagens</h1>
    
      <Button variant={'contained'} color={'primary'} onClick={goToCreateTrip}>Criar viagem</Button>
    

    <List component="nav" >
      {trips.map((trip) => {
        return <h3 key={trip.id}>
            <ListItem button divider>
             <ListItemText primary={trip.name} /><br/><br/>
             <button onClick={goToDetailsTrips}>Detalhes</button>
           </ListItem>
        </h3>
      })}
    </List>
  </TripsListPageContainer>
}


export default TripDetailsPage