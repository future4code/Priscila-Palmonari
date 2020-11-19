import styled from "styled-components"
import React from "react"
import { useHistory } from "react-router-dom";

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
        <form className={classes.root1} noValidate autoComplete="off">
          <div>
          <h1>Formulário de Candidatura</h1>
          <TextField required label="Digite seu Nome:" type="text"/><br/>
          <TextField  label="Digite sua Idade:" type="number"/><br/>
          <TextField label="Profissão:" type="text"/><br/>
          <TextField label="País:" type="text" /><br/>
          <TextField label="Por que quer ir a esta VIAGEM?" type="text"/><br/>
          <Chip className={classes.chip} color="primary" label="Enviar Candidatura" />
          </div>
        </form>
      </div>
    </div>

  );
}

export default FormSubscription 