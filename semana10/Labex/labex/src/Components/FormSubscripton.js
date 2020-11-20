import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
  chip: {
    margin: theme.spacing(1),
  },
  section2: {
    margin: theme.spacing(3),
  },

}))

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }
  return { form, onChange }
}

function FormSubscription() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory()

  const goBackToTrips = () => {
    history.goBack()
  }

  const goToLoginADM = () => {
    history.push("/login")
  }

  const { id } = useParams()

  const { form, onChange } = useForm({ name: "", age: "", profession: "", country: "", applicationText: "" })

  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    submitForm()
  }
  const submitForm = () => {
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips/${id}/apply`, form)
      .then(response => {
        console.log(response)
        alert("Candidatura envida com SUCESSO",response.data.message)
      })
      .catch(e => {
        console.log(e)
        alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS!!Verifique se os preencheu corretamente!",e)
      })
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
          <Tab label="Login" onClick={goToLoginADM} />
          <Tab label="Viagens" onClick={goBackToTrips} />
        </Tabs>
      </Paper>

      <div>
        <form className={classes.root1} noValidate autoComplete="off" >
          <div>
            <h1>Formulário de Candidatura</h1>
            <TextField 
            required 
            name="name"
            value={form.name}
            pattern="[A-Za-z ]{3,}"
            label="Digite seu Nome:" 
            type="text"
            onChange={handleInputChange} />
            <br />

            <TextField 
            required
            name="age"
            value={form.age}
            min="18"
            label="Digite sua Idade:" 
            type="number" 
            onChange={handleInputChange}/>
            <br />

            <TextField
            required 
            name="profession"
            value={form.profession}
            label="Profissão:" 
            type="text"
            onChange={handleInputChange} />
            <br />

            <TextField 
            required
            name="country"
            value={form.country}
            label="País:" 
            type="text" 
            onChange={handleInputChange}/>
            <br />

            <TextField 
            required
            name="applicationText"
            value={form.text}
            pattern="[A-Za-z ]{30,}"
            label="Por que quer ir a esta VIAGEM?" 
            type="text" 
            onChange={handleInputChange}/>
            <br />

            <Chip className={classes.chip} color="primary" label="Enviar Candidatura" type='submit' onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>

  );
}

export default FormSubscription 