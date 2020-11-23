import logo from './logo.svg';
import './App.css';
import Router from './Components/Router/Router';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <div >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssBaseline/>
      <Router/>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
