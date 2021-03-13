import {render} from 'react-dom';
import './styles/global.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './routes';

export function App(){

    return  (
      <Router>
        <Routes/>
      </Router>
    )
}