import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField, Button } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import styled from "styled-components";
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { useForm } from '../Hooks/useForm';

const FormContainer = styled.form`
  display: grid;
  gap: 16px;
  justify-content:center;
  text-align: center; 
  margin-top: 50px;
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


function CreateTrips() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  useProtectedPage()

  const history = useHistory()
  const [date, setDate] = useState(new Date())

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      history.push('/ADMTripList/')
    })
  }

  const goToADMListTrips = () => {
    history.push("/ADMTripList/")
  }

  const GoToTrips = () =>{
    history.push("/")
  }
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
          <Tab label="Lista das Viagens" onClick={goToADMListTrips} />
          <Tab label="Candidatar a Viagem" onClick={GoToTrips} />
        </Tabs>
      </Paper>

      <div>
        <FormContainer className={classes.root1} noValidate autoComplete="off" onSubmit={onSubmitForm} >
          <div>
            <h1>Criar Viagens</h1>
            <TextField
              label={'Nome'}
              onChange={onChangeInput}
              name={'name'}
              value={form['name']}
            />
            <TextField
              label={'Planeta'}
              onChange={onChangeInput}
              name={'planet'}
              value={form['planet']}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Data"
              value={date}
              onChange={date => setDate(date)}
            />
            <TextField
              label={'Descrição'}
              onChange={onChangeInput}
              name={'description'}
              value={form['description']}
            />
            <TextField
              label={'Duração em dias'} type={'number'}
              onChange={onChangeInput}
              name={'duration'}
              value={form['duration']}
            /><br />
            <Button variant={'contained'} color={'primary'} type={'submit'}>Criar Viagem</Button>
          </div>

        </FormContainer>
      </div>
    </div>

  );
}

export default CreateTrips