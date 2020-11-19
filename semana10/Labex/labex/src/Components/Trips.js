import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import React from "react"
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
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

  const goToFormSubscription = () => {
    history.push("/formSubscription")
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
          <Tab label="Login" onClick={goToLoginPage} />
        </Tabs>
      </Paper>

      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Saturno" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Lual em Saturno"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {"Será uma viagem incrível de 580 dias!!"}
              <div>
              <Chip className={classes.chip} color="primary" label="Candidatar-se para Viagem" onClick={goToFormSubscription} />
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Marte" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Esquenta em Marte"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {" Esta viagem será mais quente que o deserto do SARA, será 390 dias!!"}
              <div>
              <Chip className={classes.chip} color="primary" label="Candidatar-se para Viagem" onClick={goToFormSubscription} />
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Netuno" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="O Gelo de Netuno"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {' Se vc gosta de frio, vem apreveitar os 450 dias em Netuno!'}
              <div>
              <Chip className={classes.chip} color="primary" label="Candidatar-se para Viagem" onClick={goToFormSubscription} />
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  </div>
  );
}

export default Trips 