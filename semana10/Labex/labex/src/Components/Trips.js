import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import React from "react"
import { useHistory } from "react-router-dom";
import { useRequestData } from '../Hooks/useRequestData';
import styled from "styled-components";




const CardViagens = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    maxWidth: 345,
    margin: theme.spacing(1),
    
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}))

function Trips() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory()
  const goToLoginPage = () => {
    history.push("/login")
  }

  const getTrips = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscila-dumont/trips", undefined)

  console.log(getTrips)
  

  const goToFormSubscription = (id) => {
    history.push(`/formSubscription/${id}`)
  }

  const list = getTrips && getTrips.trips.map((trip, i) => {
    return (
      <div>
        <Card className={classes.root1} key={trip.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={`https://picsum.photos/200/200?a=${i}`}
              title="Contemplative Reptile"
            />
            <CardContent key={trip.id}>
              <Typography gutterBottom variant="h5" component="h1">
                {trip.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {trip.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"Data: "}{trip.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"Duração da Viagem: "}{trip.durationInDays}{" dias"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary" onClick={() => { goToFormSubscription(trip.id) }}>
              Candidatar-se para esta Viagem
           </Button>
          </CardActions>
        </Card>

      </div>
    )
  })

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
          <Tab label="Área do Administrador" onClick={goToLoginPage} />
        </Tabs>
      </Paper>
      <CardViagens>
        <h1>Escolha a sua Viagem</h1>
      {list}
      </CardViagens>
      
    </div>
  );
}

export default Trips 