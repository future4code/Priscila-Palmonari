import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectedPage } from "../Hooks/useProtectedPage"
import styled from "styled-components";


const ADMTripDetails = () => {

    const { id } = useParams()
    const [trips, setTrips] = useState();
    const [candidates, setCandidates] = useState([]);

    useProtectedPage()
    const history = useHistory()

    const getTripDetail = () => {
        const axiosConfig = {
            headers: { auth: localStorage.getItem("token") }
        }
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trip/${id}`, axiosConfig)

            .then((response) => {
                setTrips(response.data.trip.name);
                setCandidates(response.data.trip.candidates)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getTripDetail()
    }, []);

    const aceptCandidate = (candidateId) => {
        const axiosConfig = {
            headers: { auth: localStorage.getItem("token") }
        }
        const body = {
            approve: true
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then((response) => {
             console.log(response)
             alert("Candidato aprovado!")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const rejectCandidate = (candidateId) => {
        const axiosConfig = {
            headers: { auth: localStorage.getItem("token") }
        }
        const body = {
            approve: false
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
            .then((response) => {
             console.log(response)
             alert("Candidato reprovado!")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const goBack = () => {
        history.push("/ADMTripList/")
    }

    return(
    <div>
            
            <h1>Candidaturas</h1>
            <div>
                <h3>{trips}</h3>
                <div>
                    {candidates.length === 0 ? (<p>Sem candidatos.</p>) : (candidates.map(candidate => {
                            return (
                                <div>
                                    <p>{candidate.name} - {candidate.age} - {candidate.country}</p>
                                    <p>{candidate.applicationText}</p>
                                    <button onClick={() => aceptCandidate(candidate.id)}>aceitar</button>
                                    <button onClick={() => rejectCandidate(candidate.id)}>rejeitar</button>
                                </div>
                            )
                        }
                        ))}
                </div>
                <button onClick={goBack}>Voltar</button>
            </div>
        </div>
    );
}
export default ADMTripDetails