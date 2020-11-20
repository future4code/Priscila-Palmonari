import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
  },
  root1: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  }
}))

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function LoginPage() {
  const history = useHistory()
  const { form, onChange } = useForm({ email: "", password: ""})

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };
  

  useEffect(() =>{
    const token = localStorage.getItem("token")

    if (token) {
      history.push("/ADMTripList")
    }

  },[history])

  
  const login = () =>{
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/login",body)
    .then((response) =>{
      localStorage.setItem("token",response.data.token)
      history.push("/ADMTripList")
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  

  const goToTrips = () =>{
    history.push("/")
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
          <Tab label="Viagens"  onClick={goToTrips}/>
        </Tabs>
      </Paper>

      <div>
        <form className={classes.root1} noValidate autoComplete="off">
          <div>
          <h1>Pagina do administrador</h1>
          <TextField 
          required 
          label="Digite seu Email:" 
          value={form.email} 
          onChange={handleInputChange}
          name={"email"}
          type={"email"}
          pattern={"[A-Za-z]{3,}"} 
          />

          <TextField 
          required
          label="Digite sua Senha" 
          type={"password" }
          autoComplete="current-password"
          value={form.password} 
          onChange={handleInputChange}
          name={"password"}
          />
          <br/>
          <Chip className={classes.chip} color="primary" label="Login" onClick={login}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage