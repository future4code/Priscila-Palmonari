import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import TripInfo from "./TripInforCard"
import CandidatesList from "./CandidatesList"
import { ContentContainer } from './styles'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const H1 = styled.h1`
 text-align:center;
`

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    root1: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
    },
    section2: {
      margin: theme.spacing(3),
    },
  
  }))


const ADMTripDetails = () => {
    const [trip, setTrip] = useState();
    const params = useParams()
    useProtectedPage()

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        const axiosConfig = {
            headers: { auth: window.localStorage.getItem("token") }
        }
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trip/${params.tripId}`, axiosConfig)
            .then((response) => {
                console.log("Res", response.data)
                setTrip(response.data.trip);
            })
            .catch((error) => {
                console.log(error);
            })
    }



    const decideCandidate = (approve, candidateId) => {
        const axiosConfig = {
            headers: { auth: localStorage.getItem("token") }
        }
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips/${params.tripId}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then((response) => {
                console.log("RESP", response.data)
                getTripDetail()
            })
            .catch(error => {
                console.log(error)
            })
    }
    const history = useHistory()
    const goBack = () => {
        history.push("/ADMTripList/")
    }

    const goToCreateTrip = () =>{
        history.push("/createTrips")        
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Lista das Viagens" onClick={goBack} />
                    <Tab label="Criar Viagens" onClick={goToCreateTrip} />
                </Tabs>
            </Paper>

            <H1>Detalhes da Viagem</H1>
            {trip ? <ContentContainer>
                <TripInfo info={trip} />
                <CandidatesList
                    candidates={trip.candidates}
                    decideCandidate={decideCandidate}
                />
            </ContentContainer> : <div>Carregando...</div>}
        </div>
    );
}
export default ADMTripDetails